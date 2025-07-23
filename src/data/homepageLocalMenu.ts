const homepageLocalMenu = [
    {
        "id": "home-program",
        "title": "Program Studi",
        "subtitle": "Jelajahi program akademik yang ditawarkan STIE Dwimulya.",
        "href": "/akademik/prodi",
        "submenu": [
            { "id": "akuntansi", "title": "Akuntansi (S1)", "href": "/akademik/prodi/akuntansi" },
            { "id": "manajemen", "title": "Manajemen (S1)", "href": "/akademik/prodi/manajemen" }
        ]
    },
    {
        "id": "home-penerimaan",
        "title": "Penerimaan",
        "subtitle": "Informasi pendaftaran dan beasiswa untuk calon mahasiswa.",
        "href": "/penerimaan",
        "submenu": [
            { "id": "maba", "title": "Mahasiswa Baru", "href": "/penerimaan/jalur/maba" },
            { "id": "beasiswa", "title": "Beasiswa", "href": "/penerimaan/beasiswa" },
            { "id": "prosedur", "title": "Prosedur Pendaftaran", "href": "/penerimaan/info/prosedur" }
        ]
    },
    {
        "id": "home-kampus",
        "title": "Kehidupan Kampus",
        "subtitle": "Aktivitas dan fasilitas untuk mendukung mahasiswa.",
        "href": "/kampus",
        "submenu": [
            { "id": "ukm", "title": "Unit Kegiatan Mahasiswa", "href": "/kampus/kemahasiswaan/ukm" },
            { "id": "fasilitas", "title": "Fasilitas Kampus", "href": "/kampus/fasilitas" },
            { "id": "prestasi", "title": "Prestasi Mahasiswa", "href": "/kampus/prestasi" }
        ]
    },
    {
        "id": "home-berita",
        "title": "Berita & Acara",
        "subtitle": "Update terbaru dari STIE Dwimulya.",
        "href": "/berita",
        "submenu": [
            { "id": "pengumuman", "title": "Pengumuman", "href": "/pengumuman" },
            { "id": "acara", "title": "Acara Kampus", "href": "/acara" }
        ]
    },
    {
        "id": "home-kontak",
        "title": "Kontak",
        "subtitle": "Hubungi kami untuk informasi lebih lanjut.",
        "href": "/kontak",
        "submenu": [
            { "id": "kontak-umum", "title": "Informasi Umum", "href": "/kontak/umum" },
            { "id": "kontak-akademik", "title": "Layanan Akademik", "href": "/kontak/akademik" }
        ]
    }
]

export default homepageLocalMenu;
