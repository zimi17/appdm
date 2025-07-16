# Panduan Deployment

Dokumen ini menjelaskan cara melakukan deployment aplikasi web ini.

## Prasyarat

- Node.js (versi 18 atau lebih tinggi)
- Akun Contentful dan Cloudinary

## Setup Lingkungan

1.  Buat file `.env` dari contoh yang ada: `cp .env.example .env`
2.  Isi variabel lingkungan di file `.env` dengan kredensial dari Contentful dan Cloudinary Anda.

## Instalasi Dependensi

```bash
npm install
```

## Menjalankan Secara Lokal

```bash
npm run dev
```

## Build untuk Produksi

```bash
npm run build
```

## Menjalankan Tes

```bash
npm run test
```

## Deployment

Aplikasi ini dapat di-deploy ke platform hosting statis seperti Vercel, Netlify, atau GitHub Pages. Cukup hubungkan repositori Anda dan konfigurasikan perintah build ke `npm run build` dan direktori output ke `dist`.
