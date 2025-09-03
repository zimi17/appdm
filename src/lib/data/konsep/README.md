# Konsep Halaman STIE Dwimulya

Folder ini berisi konfigurasi konsep untuk setiap halaman website STIE Dwimulya berdasarkan struktur navigasi yang didefinisikan dalam `nav.ts`.

## Struktur Folder

```
konsep/
├── akademik.ts                           # Halaman utama akademik
├── akademik/
│   ├── kalender-akademik.ts             # Kalender akademik
│   ├── kurikulum.ts                     # Kurikulum pendidikan
│   ├── kurikulum/
│   │   └── merdeka-belajar.ts          # Kurikulum merdeka belajar
│   └── program-sarjana/
│       ├── akuntansi.ts                # Program studi akuntansi
│       └── manajemen.ts                # Program studi manajemen
├── kemahasiswaan.ts                     # Halaman utama kemahasiswaan
├── kemahasiswaan/
│   └── organisasi/
│       └── bem.ts                      # Badan Eksekutif Mahasiswa
├── layanan.ts                          # Halaman utama layanan
├── layanan/
│   └── fasilitas-akademik/
│       └── perpustakaan.ts             # Fasilitas perpustakaan
├── pendaftaran.ts                      # Halaman utama pendaftaran
├── pendaftaran/
│   ├── jalur/
│   │   └── pmdk.ts                     # Jalur PMDK
│   └── program-beasiswa/
│       └── kip-kuliah.ts               # Beasiswa KIP Kuliah
├── penelitian.ts                       # Halaman utama penelitian
├── tentang.ts                          # Halaman utama tentang
├── tentang/
│   ├── sejarah.ts                      # Sejarah & identitas
│   └── visi-misi.ts                    # Visi & misi
└── index.ts                            # Export semua konfigurasi
```

## Format Konfigurasi

Setiap file konfigurasi mengikuti struktur berikut:

```typescript
export const namaHalamanPageConfig = {
  title: "Judul Halaman",
  description: "Deskripsi halaman untuk SEO",
  
  topper: {
    type: "hero",
    variant: "kategori",
    backgroundImage: "/images/hero-image.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Judul Hero",
      subtitle: "Subtitle Hero",
      description: "Deskripsi hero section",
      cta: {
        primary: { text: "CTA Utama", href: "/link" },
        secondary: { text: "CTA Sekunder", href: "/link" }
      }
    },
    // ... blok lainnya
  ]
};
```

## Jenis Blok

### 1. Hero Block
Blok utama di bagian atas halaman dengan judul, subtitle, deskripsi, dan CTA.

### 2. Stats Block
Blok statistik dengan angka-angka penting.

### 3. Features Block
Blok fitur atau keunggulan dengan ikon dan deskripsi.

### 4. Content Block
Blok konten dengan teks panjang dan sub-bagian.

### 5. CTA Block
Blok call-to-action untuk mendorong aksi pengguna.

## Penggunaan

```typescript
import { getPageConfig, routeExists } from '@/lib/data/konsep';

// Mendapatkan konfigurasi halaman
const config = getPageConfig('/akademik');

// Mengecek apakah route ada
if (routeExists('/akademik/program-sarjana/manajemen')) {
  // Route exists
}
```

## Konten Berdasarkan

Semua konten dalam konfigurasi ini berdasarkan:
- Dokumentasi STIE Dwimulya di folder `docs/`
- Struktur navigasi di `nav.ts`
- Key information dan value points STIE Dwimulya
- Brand guidelines dan positioning sebagai "Kampus Rakyat, Kampus Perubahan"

## Catatan

- Semua path gambar menggunakan placeholder dan perlu disesuaikan dengan aset yang tersedia
- Konten dapat disesuaikan lebih lanjut berdasarkan kebutuhan spesifik
- Struktur ini mendukung pengembangan komponen dinamis berdasarkan konfigurasi
