# Panduan Komponen Singleton Spesifik Template

Dokumen ini memberikan panduan untuk komponen singleton yang dapat digunakan secara opsional pada template tertentu untuk memberikan fungsionalitas tambahan.

---

## Deskripsi Singleton

Template-Specific Singletons adalah komponen yang dapat digunakan **opsional dan hanya sekali** pada template halaman tertentu. Mereka menambahkan konteks atau fungsionalitas yang relevan dengan tipe halaman tersebut.

---

## Article Singletons `❌`
> Singleton yang dirancang khusus untuk memperkaya halaman artikel.

#### Related People `❌`
- **Deskripsi**: Menyediakan informasi tentang orang-orang yang disebutkan dalam sebuah artikel, seperti profil singkat atau tautan ke halaman profil mereka.
- **Aturan**: Digunakan ketika artikel merujuk pada individu-individu kunci (misalnya, dosen, peneliti, alumni) yang memiliki profil di dalam sistem.

#### Article Footer `❌`
- **Deskripsi**: Menyediakan koleksi standar kredit artikel, kata kunci, dan tautan topik.
- **Aturan**: Ditempatkan di bagian bawah setiap artikel untuk memberikan metadata dan jalur navigasi terkait.

---

## Kompatibilitas Template
| Komponen | Halaman Arsip | Halaman Arahan | Halaman Detail | Halaman Artikel |
| :--- | :---: | :---: | :---: | :---: |
| Article Footer | | | | ⚫️ |
| Related People | | | ⚫️ | ⚫️ |