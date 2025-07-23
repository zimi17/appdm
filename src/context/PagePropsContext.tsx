import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

// --- ASUMSI SEMENTARA ---
// Tipe PageProps ini adalah placeholder. Anda harus menyesuaikannya
// dengan struktur data Anda yang sebenarnya.
export interface PageProps {
  map: any[];
  errors: any[];
  fetches: any[];
  singletons: Record<string, any>;
  contentful: Record<string, any>;
  includes: { Asset: any[]; Entry: any[] };
  entry?: any; // Entri utama halaman
  request: {
    method: "get" | "post";
    path: string;
    query: Record<string, string>;
    cookies: Record<string, string>;
    headers: Record<string, string>;
    host: string;
    domain: string;
    env: "production" | "development";
    search: string;
  };
  locale: string;
  defaultLocale: string;
  supportedLocales: string[];
  hasTranslations: boolean;
}

// Fungsi resolveEntry palsu (mock). Ganti dengan logika Anda yang sebenarnya.
function resolveEntry(includes: any, entry: any) {
  // Logika ini hanya mengembalikan entri apa adanya.
  // Implementasi sebenarnya mungkin akan melakukan resolve link di dalam entri.
  console.log("resolveEntry called with (enable logging to see data):", { includes, entry });
  return entry;
}
// --- AKHIR ASUMSI ---


const PagePropsContext = createContext<PageProps>({
  map: [],
  errors: [],
  fetches: [],
  singletons: {},
  contentful: {},
  includes: { Asset: [], Entry: [] },
  request: {
    method: "get",
    path: "/",
    query: {},
    cookies: {},
    headers: {},
    host: "www.hbs.edu",
    domain: "www",
    env: "production",
    search: "",
  },
  locale: "en-us",
  defaultLocale: "en-us",
  supportedLocales: ["en-us", "zh-cn"],
  hasTranslations: false,
});

export function PagePropsProvider({
  children,
  ...ctx
}: PropsWithChildren<PageProps>) {
  // Memanggil fungsi resolve (saat ini masih mock)
  const entry = resolveEntry(ctx.includes, ctx.entry);

  // Mengurutkan 'map' seperti pada contoh kode Anda
  const map = ctx.map.sort((a, b) => {
    if (a.order && !b.order) return -1;
    if (b.order && !a.order) return 1;
    if (a.order && b.order && a.order !== b.order) {
      return a.order > b.order ? 1 : -1;
    }
    // Fallback ke perbandingan judul jika tidak ada 'order'
    if(a.title && b.title) {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <PagePropsContext.Provider value={{ ...ctx, entry, map }}>
      {children}
    </PagePropsContext.Provider>
  );
}

export function usePageProps() {
  return useContext(PagePropsContext);
}
