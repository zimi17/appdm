// Akademik
export { akademikPageConfig } from './akademik';
export { manajemenPageConfig } from './akademik/program-sarjana/manajemen';
export { akuntansiPageConfig } from './akademik/program-sarjana/akuntansi';
export { kurikulumPageConfig } from './akademik/kurikulum';
export { merdekaBelajarPageConfig } from './akademik/kurikulum/merdeka-belajar';
export { mataKuliahPageConfig } from './akademik/kurikulum/mata-kuliah';
export { kalenderAkademikPageConfig } from './akademik/kalender-akademik';

// Layanan
export { layananPageConfig } from './layanan';
export { perpustakaanPageConfig } from './layanan/fasilitas-akademik/perpustakaan';

// Penelitian
export { penelitianPageConfig } from './penelitian';

// Kemahasiswaan
export { kemahasiswaanPageConfig } from './kemahasiswaan';
export { bemPageConfig } from './kemahasiswaan/organisasi/bem';

// Tentang
export { tentangPageConfig } from './tentang';
export { visiMisiPageConfig } from './tentang/visi-misi';
export { sejarahPageConfig } from './tentang/sejarah';

// Pendaftaran
export { pendaftaranPageConfig } from './pendaftaran';
export { kipKuliahPageConfig } from './pendaftaran/program-beasiswa/kip-kuliah';
export { beasiswaPrestasiPageConfig } from './pendaftaran/program-beasiswa/prestasi';
export { beasiswaYatimPiatuPageConfig } from './pendaftaran/program-beasiswa/yatim-piatu';
export { pmdkPageConfig } from './pendaftaran/jalur/pmdk';

// Type definitions based on ACTUAL available components
export interface PageBlock {
  _type: 'richText' | 'multiColumnRichText' | 'hero' | 'twoColumnContent' | 'cardGrid' | 'accordionSection' | 'promoBar' | 'contentSection';
  _key?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageHint?: string;
  content?: string; // For richText blocks
  items?: Array<{
    _key?: string;
    title?: string;
    description?: string;
    image?: any;
    href?: string;
    id?: string;
  }>;
}

export interface TopperConfig {
  _type: 'simple-page-topper' | 'split-topper' | 'large-asset-topper' | 'media-topper' | 'card-topper' | 'article-topper' | 'mission-topper' | 'search-topper';
  title?: string;
  description?: string;
  intro?: string;
  image?: any;
  cta?: {
    text: string;
    href: string;
  };
}

export interface PageConfig {
  title: string;
  description: string;
  topper: TopperConfig;
  blocks: PageBlock[];
}

// Page route mapping
export const pageConfigs: Record<string, PageConfig> = {
  // Akademik
  '/akademik': akademikPageConfig,
  '/akademik/program-sarjana/manajemen': manajemenPageConfig,
  '/akademik/program-sarjana/akuntansi': akuntansiPageConfig,
  '/akademik/kurikulum': kurikulumPageConfig,
  '/akademik/kurikulum/merdeka-belajar': merdekaBelajarPageConfig,
  '/akademik/kurikulum/mata-kuliah': mataKuliahPageConfig,
  '/akademik/kalender-akademik': kalenderAkademikPageConfig,
  
  // Layanan
  '/layanan': layananPageConfig,
  '/layanan/fasilitas-akademik/perpustakaan': perpustakaanPageConfig,
  
  // Penelitian
  '/penelitian': penelitianPageConfig,
  
  // Kemahasiswaan
  '/kemahasiswaan': kemahasiswaanPageConfig,
  '/kemahasiswaan/organisasi/bem': bemPageConfig,
  
  // Tentang
  '/tentang': tentangPageConfig,
  '/tentang/visi-misi': visiMisiPageConfig,
  '/tentang/sejarah': sejarahPageConfig,
  
  // Pendaftaran
  '/pendaftaran': pendaftaranPageConfig,
  '/pendaftaran/program-beasiswa/kip-kuliah': kipKuliahPageConfig,
  '/pendaftaran/program-beasiswa/prestasi': beasiswaPrestasiPageConfig,
  '/pendaftaran/program-beasiswa/yatim-piatu': beasiswaYatimPiatuPageConfig,
  '/pendaftaran/jalur/pmdk': pmdkPageConfig,
};

// Helper function to get page config by route
export function getPageConfig(route: string): PageConfig | undefined {
  return pageConfigs[route];
}

// Helper function to get all available routes
export function getAllRoutes(): string[] {
  return Object.keys(pageConfigs);
}

// Helper function to check if route exists
export function routeExists(route: string): boolean {
  return route in pageConfigs;
}

// Helper function to get configs by category
export function getConfigsByCategory(category: string): Record<string, PageConfig> {
  const filtered: Record<string, PageConfig> = {};
  Object.entries(pageConfigs).forEach(([route, config]) => {
    if (route.startsWith(`/${category}`)) {
      filtered[route] = config;
    }
  });
  return filtered;
}
