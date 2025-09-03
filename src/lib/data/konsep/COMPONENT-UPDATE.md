# Update Komponen Konsep Halaman

## Perubahan yang Dilakukan

Konfigurasi konsep halaman telah diperbarui untuk hanya menggunakan komponen yang benar-benar tersedia di `src/components`.

### Komponen yang Tersedia

#### Blocks (dari `src/components/blocks/render-blocks.tsx`)
- ✅ `hero` - HeroSection
- ✅ `twoColumnContent` - TwoColumnContent  
- ✅ `cardGrid` - CardGrid
- ✅ `accordionSection` - AccordionSection
- ✅ `promoBar` - PromoBar

#### Toppers (dari `src/components/toppers/`)
- ✅ `simple-page-topper` - Simple Page Topper
- ✅ `split-topper` - Split Topper
- ✅ `large-asset-topper` - Large Asset Topper
- ✅ `media-topper` - Media Topper
- ✅ `card-topper` - Card Topper
- ✅ `article-topper` - Article Topper
- ✅ `mission-topper` - Mission Topper
- ✅ `search-topper` - Search Topper

### Struktur Konfigurasi Baru

```typescript
export interface PageBlock {
  _type: 'hero' | 'twoColumnContent' | 'cardGrid' | 'accordionSection' | 'promoBar';
  _key?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageHint?: string;
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
```

### Contoh Konfigurasi yang Benar

```typescript
export const examplePageConfig = {
  title: "Judul Halaman",
  description: "Deskripsi halaman untuk SEO",
  
  topper: {
    _type: "simple-page-topper",
    title: "Judul Halaman",
    description: "Deskripsi halaman",
    intro: "Kampus Rakyat, Kampus Perubahan",
    cta: {
      text: "Daftar Sekarang",
      href: "/pendaftaran"
    }
  },

  blocks: [
    {
      _type: "hero",
      _key: "hero-main",
      title: "Judul Hero",
      description: "Deskripsi hero section",
      imageUrl: "/images/hero-image.jpg"
    },
    {
      _type: "cardGrid",
      _key: "card-section",
      title: "Judul Card Grid",
      description: "Deskripsi card grid",
      items: [
        {
          _key: "card-1",
          title: "Card 1",
          description: "Deskripsi card 1",
          href: "/link-1"
        }
      ]
    },
    {
      _type: "promoBar",
      _key: "cta-section",
      title: "Call to Action",
      description: "Deskripsi CTA"
    }
  ]
};
```

### Perubahan dari Struktur Lama

#### Sebelum (Tidak Kompatibel)
```typescript
// ❌ Komponen yang tidak tersedia
blocks: [
  {
    type: "stats",  // Tidak ada komponen ini
    type: "features",  // Tidak ada komponen ini
    type: "content",  // Tidak ada komponen ini
    type: "cta"  // Tidak ada komponen ini
  }
]

topper: {
  type: "hero",  // Format tidak sesuai
  variant: "academic",  // Property tidak ada
  backgroundImage: "/image.jpg",  // Property tidak sesuai
  overlay: true  // Property tidak ada
}
```

#### Sesudah (Kompatibel)
```typescript
// ✅ Komponen yang tersedia
blocks: [
  {
    _type: "hero",  // ✅ Tersedia
    _type: "cardGrid",  // ✅ Tersedia
    _type: "twoColumnContent",  // ✅ Tersedia
    _type: "promoBar"  // ✅ Tersedia
  }
]

topper: {
  _type: "simple-page-topper",  // ✅ Tersedia
  title: "Judul",
  description: "Deskripsi",
  cta: { text: "CTA", href: "/link" }
}
```

### File yang Telah Diperbarui

- ✅ `index.ts` - Type definitions
- ✅ `akademik.ts` - Contoh implementasi
- ✅ `pendaftaran.ts` - Contoh implementasi

### File yang Perlu Diperbarui

Semua file konfigurasi lainnya perlu diperbarui menggunakan struktur baru:

- `akademik/program-sarjana/manajemen.ts`
- `akademik/program-sarjana/akuntansi.ts`
- `akademik/kurikulum.ts`
- `akademik/kurikulum/merdeka-belajar.ts`
- `akademik/kurikulum/mata-kuliah.ts`
- `akademik/kalender-akademik.ts`
- `layanan.ts`
- `layanan/fasilitas-akademik/perpustakaan.ts`
- `penelitian.ts`
- `kemahasiswaan.ts`
- `kemahasiswaan/organisasi/bem.ts`
- `tentang.ts`
- `tentang/visi-misi.ts`
- `tentang/sejarah.ts`
- `pendaftaran/program-beasiswa/kip-kuliah.ts`
- `pendaftaran/program-beasiswa/prestasi.ts`
- `pendaftaran/program-beasiswa/yatim-piatu.ts`
- `pendaftaran/jalur/pmdk.ts`

### Panduan Update Manual

Untuk setiap file, ikuti pola ini:

1. **Ubah topper** dari format lama ke `simple-page-topper`
2. **Ubah blocks** menggunakan hanya komponen yang tersedia
3. **Tambahkan `_type` dan `_key`** untuk setiap block
4. **Sesuaikan properties** dengan yang didukung komponen

### Rekomendasi Mapping

| Konsep Lama | Komponen Tersedia | Penggunaan |
|-------------|-------------------|------------|
| `stats` | `cardGrid` | Tampilkan statistik sebagai cards |
| `features` | `cardGrid` | Tampilkan fitur sebagai cards |
| `content` | `twoColumnContent` | Tampilkan konten teks |
| `cta` | `promoBar` | Tampilkan call-to-action |

Dengan perubahan ini, semua konfigurasi konsep akan kompatibel dengan komponen yang benar-benar tersedia di sistem.
