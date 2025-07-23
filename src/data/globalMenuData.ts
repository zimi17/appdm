const globalMenuData = [
    {
        "id": "tentang-kami",
        "title": "Tentang Kami",
        "subtitle": "Mengenal lebih dekat STIE Dwimulya, dari sejarah hingga identitas institusi.",
        "href": "/tentang-kami",
        "submenu": [
            {
                "id": "sejarah-profil",
                "title": "Sejarah & Profil",
                "subtitle": "Informasi tentang latar belakang dan identitas institusi.",
                "href": "/tentang-kami/sejarah-profil",
                "submenu": [
                    { "id": "sejarah", "title": "Sejarah", "href": "/tentang-kami/sejarah" },
                    { "id": "visi-misi", "title": "Visi, Misi, & Tujuan", "href": "/tentang-kami/visi-misi" },
                    { "id": "nilai-dasar", "title": "Nilai Dasar", "href": "/tentang-kami/nilai-dasar" },
                    { "id": "izin", "title": "Kedudukan & Izin", "href": "/tentang-kami/izin" }
                ]
            },
            {
                "id": "struktur",
                "title": "Struktur Organisasi",
                "subtitle": "Susunan organisasi dan kepemimpinan institusi.",
                "href": "/tentang-kami/struktur",
                "submenu": [
                    { "id": "pimpinan", "title": "Pimpinan Institusi", "href": "/tentang-kami/pimpinan" },
                    { "id": "senat", "title": "Senat", "href": "/tentang-kami/senat" },
                    { "id": "penyantun", "title": "Dewan Penyantun", "href": "/tentang-kami/penyantun" },
                    { "id": "unit", "title": "Unit & Bagian", "href": "/tentang-kami/unit" }
                ]
            },
            {
                "id": "identitas-visual",
                "title": "Identitas Visual",
                "subtitle": "Simbol dan representasi visual STIE Dwimulya.",
                "href": "/tentang-kami/identitas-visual",
                "submenu": [
                    { "id": "logo", "title": "Logo STIE Dwimulya", "href": "/tentang-kami/logo" },
                    { "id": "busana", "title": "Busana Akademik", "href": "/tentang-kami/busana" }
                ]
            }
        ]
    },
    {
        "id": "akademik",
        "title": "Akademik",
        "subtitle": "Informasi lengkap mengenai program studi, kurikulum, dan kehidupan akademik.",
        "href": "/akademik",
        "submenu": [
            {
                "id": "prodi",
                "title": "Program Studi",
                "subtitle": "Pilihan program studi yang tersedia di STIE Dwimulya.",
                "href": "/akademik/prodi",
                "submenu": [
                    { "id": "akuntansi", "title": "Akuntansi (S1)", "href": "/akademik/prodi/akuntansi" },
                    { "id": "manajemen", "title": "Manajemen (S1)", "href": "/akademik/prodi/manajemen" }
                ]
            },
            {
                "id": "kurikulum",
                "title": "Kurikulum",
                "subtitle": "Rancangan kurikulum untuk mendukung pembelajaran.",
                "href": "/akademik/kurikulum",
                "submenu": [
                    { "id": "kur-akuntansi", "title": "Kurikulum Akuntansi", "href": "/akademik/kurikulum/akuntansi" },
                    { "id": "kur-manajemen", "title": "Kurikulum Manajemen", "href": "/akademik/kurikulum/manajemen" },
                    { "id": "sks", "title": "Sistem Kredit Semester (SKS)", "href": "/akademik/kurikulum/sks" }
                ]
            },
            {
                "id": "pembelajaran",
                "title": "Proses Pembelajaran",
                "subtitle": "Sistem dan metode pembelajaran di kampus.",
                "href": "/akademik/pembelajaran",
                "submenu": [
                    { "id": "kalender", "title": "Kalender Akademik", "href": "/akademik/pembelajaran/kalender" },
                    { "id": "penilaian", "title": "Penilaian Hasil Belajar", "href": "/akademik/pembelajaran/penilaian" },
                    { "id": "otonomi", "title": "Kebebasan Akademik & Otonomi Keilmuan", "href": "/akademik/pembelajaran/otonomi" }
                ]
            },
            {
                "id": "dosen-tendik",
                "title": "Dosen & Tenaga Kependidikan",
                "subtitle": "Informasi tentang tenaga pengajar dan staf pendukung.",
                "href": "/akademik/dosen-tendik",
                "submenu": [
                    { "id": "dosen", "title": "Dosen", "href": "/akademik/dosen-tendik/dosen" },
                    { "id": "tendik", "title": "Tenaga Kependidikan", "href": "/akademik/dosen-tendik/tendik" }
                ]
            }
        ]
    },
    {
        "id": "penerimaan",
        "title": "Penerimaan",
        "subtitle": "Informasi pendaftaran mahasiswa baru dan berbagai program beasiswa.",
        "href": "/penerimaan",
        "submenu": [
            {
                "id": "jalur",
                "title": "Jalur Pendaftaran",
                "subtitle": "Berbagai jalur untuk menjadi mahasiswa STIE Dwimulya.",
                "href": "/penerimaan/jalur",
                "submenu": [
                    { "id": "maba", "title": "Mahasiswa Baru", "href": "/penerimaan/jalur/maba" },
                    { "id": "pindahan", "title": "Mahasiswa Pindahan/Transfer", "href": "/penerimaan/jalur/pindahan" },
                    { "id": "asing", "title": "Mahasiswa Asing", "href": "/penerimaan/jalur/asing" }
                ]
            },
            {
                "id": "beasiswa",
                "title": "Beasiswa",
                "subtitle": "Program beasiswa untuk mendukung pendidikan mahasiswa.",
                "href": "/penerimaan/beasiswa",
                "submenu": [
                    { "id": "kip", "title": "KIP Kuliah Merdeka", "href": "/penerimaan/beasiswa/kip" },
                    { "id": "ppa", "title": "Beasiswa PPA", "href": "/penerimaan/beasiswa/ppa" },
                    { "id": "tahfidz", "title": "Beasiswa Tahfidz Al-Qur'an", "href": "/penerimaan/beasiswa/tahfidz" },
                    { "id": "yayasan", "title": "Beasiswa Yayasan Dwimulya", "href": "/penerimaan/beasiswa/yayasan" }
                ]
            },
            {
                "id": "info",
                "title": "Informasi Penting",
                "subtitle": "Panduan dan persyaratan pendaftaran mahasiswa.",
                "href": "/penerimaan/info",
                "submenu": [
                    { "id": "persyaratan", "title": "Persyaratan Umum", "href": "/penerimaan/info/persyaratan" },
                    { "id": "prosedur", "title": "Prosedur Pendaftaran", "href": "/penerimaan/info/prosedur" }
                ]
            }
        ]
    },
    {
        "id": "kampus",
        "title": "Kehidupan Kampus",
        "subtitle": "Mendukung perkembangan mahasiswa dan menyediakan lingkungan belajar yang kondusif.",
        "href": "/kampus",
        "submenu": [
            {
                "id": "kemahasiswaan",
                "title": "Kemahasiswaan",
                "subtitle": "Kegiatan dan layanan untuk mendukung mahasiswa.",
                "href": "/kampus/kemahasiswaan",
                "submenu": [
                    { "id": "hak-kewajiban", "title": "Hak & Kewajiban Mahasiswa", "href": "/kampus/kemahasiswaan/hak-kewajiban" },
                    { "id": "ukm", "title": "Unit Kegiatan Mahasiswa (UKM)", "href": "/kampus/kemahasiswaan/ukm" },
                    { "id": "karir-alumni", "title": "Pengembangan Karir & Alumni", "href": "/kampus/kemahasiswaan/karir-alumni" }
                ]
            },
            {
                "id": "prestasi",
                "title": "Prestasi Mahasiswa",
                "subtitle": "Pencapaian mahasiswa di berbagai bidang.",
                "href": "/kampus/prestasi",
                "submenu": [
                    { "id": "akademik", "title": "Prestasi Akademik", "href": "/kampus/prestasi/akademik" },
                    { "id": "non-akademik", "title": "Prestasi Non-Akademik", "href": "/kampus/prestasi/non-akademik" }
                ]
            },
            {
                "id": "fasilitas",
                "title": "Fasilitas Kampus",
                "subtitle": "Sarana dan prasarana untuk mendukung pembelajaran.",
                "href": "/kampus/fasilitas",
                "submenu": [
                    { "id": "perpustakaan", "title": "Perpustakaan", "href": "/kampus/fasilitas/perpustakaan" },
                    { "id": "laboratorium", "title": "Laboratorium", "href": "/kampus/fasilitas/laboratorium" },
                    { "id": "sarana", "title": "Sarana & Prasarana Lainnya", "href": "/kampus/fasilitas/sarana" },
                    { "id": "sia", "title": "Sistem Informasi Akademik", "href": "/kampus/fasilitas/sia" },
                    { "id": "kesehatan", "title": "Kesehatan & Kesejahteraan", "href": "/kampus/fasilitas/kesehatan" }
                ]
            }
        ]
    },
    {
        "id": "penelitian-pkm",
        "title": "Penelitian & PkM",
        "subtitle": "Berkomitmen pada pengembangan ilmu pengetahuan dan kontribusi nyata bagi masyarakat.",
        "href": "/penelitian-pkm",
        "submenu": [
            {
                "id": "penelitian",
                "title": "Penelitian",
                "subtitle": "Kegiatan penelitian untuk kemajuan ilmu pengetahuan.",
                "href": "/penelitian-pkm/penelitian",
                "submenu": [
                    { "id": "roadmap", "title": "Roadmap Penelitian", "href": "/penelitian-pkm/penelitian/roadmap" },
                    { "id": "unggulan", "title": "Bidang Unggulan Penelitian", "href": "/penelitian-pkm/penelitian/unggulan" },
                    { "id": "pendanaan", "title": "Pendanaan Penelitian", "href": "/penelitian-pkm/penelitian/pendanaan" },
                    { "id": "publikasi", "title": "Publikasi Penelitian", "href": "/penelitian-pkm/penelitian/publikasi" }
                ]
            },
            {
                "id": "pkm",
                "title": "Pengabdian kepada Masyarakat",
                "subtitle": "Kontribusi nyata untuk masyarakat melalui program PkM.",
                "href": "/penelitian-pkm/pkm",
                "submenu": [
                    { "id": "roadmap-pkm", "title": "Roadmap PkM", "href": "/penelitian-pkm/pkm/roadmap" },
                    { "id": "pendanaan-pkm", "title": "Pendanaan PkM", "href": "/penelitian-pkm/pkm/pendanaan" },
                    { "id": "publikasi-pkm", "title": "Publikasi PkM", "href": "/penelitian-pkm/pkm/publikasi" }
                ]
            },
            {
                "id": "tridharma",
                "title": "Luaran Tridharma",
                "subtitle": "Hasil dari pelaksanaan tridharma perguruan tinggi.",
                "href": "/penelitian-pkm/tridharma",
                "submenu": []
            }
        ]
    },
    {
        "id": "mutu",
        "title": "Penjaminan Mutu",
        "subtitle": "Menjamin kualitas pendidikan dan layanan sesuai standar nasional.",
        "href": "/mutu",
        "submenu": [
            {
                "id": "spmi",
                "title": "Sistem Penjaminan Mutu Internal",
                "subtitle": "Sistem untuk menjaga standar kualitas pendidikan.",
                "href": "/mutu/spmi",
                "submenu": [
                    { "id": "tujuan", "title": "Tujuan & Prinsip SPMI", "href": "/mutu/spmi/tujuan" },
                    { "id": "lingkup", "title": "Ruang Lingkup SPMI", "href": "/mutu/spmi/lingkup" }
                ]
            },
            {
                "id": "akuntabilitas",
                "title": "Akuntabilitas Publik",
                "subtitle": "Transparansi dalam layanan akademik dan non-akademik.",
                "href": "/mutu/akuntabilitas",
                "submenu": [
                    { "id": "akademik", "title": "Akuntabilitas Akademik", "href": "/mutu/akuntabilitas/akademik" },
                    { "id": "non-akademik", "title": "Akuntabilitas Non-Akademik", "href": "/mutu/akuntabilitas/non-akademik" }
                ]
            },
            {
                "id": "audit",
                "title": "Audit Mutu Internal",
                "subtitle": "Proses evaluasi untuk memastikan kualitas institusi.",
                "href": "/mutu/audit",
                "submenu": []
            }
        ]
    },
    {
        "id": "kerjasama",
        "title": "Kerjasama",
        "subtitle": "Membangun sinergi dengan berbagai pihak untuk kemajuan institusi.",
        "href": "/kerjasama",
        "submenu": [
            {
                "id": "nasional",
                "title": "Kerjasama Nasional",
                "subtitle": "Kemitraan dengan institusi di dalam negeri.",
                "href": "/kerjasama/nasional",
                "submenu": []
            },
            {
                "id": "internasional",
                "title": "Kerjasama Internasional",
                "subtitle": "Kemitraan dengan institusi di luar negeri.",
                "href": "/kerjasama/internasional",
                "submenu": []
            },
            {
                "id": "evaluasi",
                "title": "Evaluasi Kerjasama",
                "subtitle": "Penilaian efektivitas kemitraan institusi.",
                "href": "/kerjasama/evaluasi",
                "submenu": []
            }
        ]
    }
]

export default globalMenuData;
