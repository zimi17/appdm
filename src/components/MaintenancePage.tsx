"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react" // Removed Rocket, Star for Swiss style

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const copyData = {
  "sunda": {
    "judul": "STIE Dwimulya",
    "status": "Website keur diperbaiki",
    "deskripsi": "Kami nuju nyiapkeun tampilan jeung fitur anyar nu leuwih matak resep. Sabar heula nya, sebentar deui anjeun bakal meunang pangalaman nu leuwih asyik jeung gampang.",
    "peluncuran": "31 Poé · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Perlu aksés ka sistem akademik ayeuna? Pencét Portal SIAKAD",
    "ucapan": "Hatur nuhun pikeun kasabaran anjeun. Kami komit pikeun terus ngaronjatkeun kualitas layanan.",
    "copyright": "© 2025 STIE Dwimulya — Sadaya hak dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Poé Kamerdikaan Indonesia"
  },
  "jawa": {
    "judul": "STIE Dwimulya",
    "status": "Website Sedang Diperbaiki",
    "deskripsi": "Kita lagi nyiapake pengalaman anyar sing luwih apik kanggo panjenengan. Monggo sabar sithik—sebentar maneh situs bakal bali online karo fitur anyar sing luwih menarik.",
    "peluncuran": "31 Dina · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Butuh akses sistem akademik saiki? Klik Portal SIAKAD",
    "ucapan": "Matur nuwun sanget atas kesabaran panjenengan. Kita tansah komit ngapikake layanan.",
    "copyright": "© 2025 STIE Dwimulya — Kabeh hak dilindhungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Dina Kamardikan Indonesia"
  },
  "minang": {
    "judul": "STIE Dwimulya",
    "status": "Website lagi dibenahi",
    "deskripsi": "Kami lagi usaha keras untuak nyadiokan tampilan anyar yang lebih menarik. Sabar dulu yaa—sebentar lagi website bisa diakses kembali.",
    "peluncuran": "31 Hari · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Perlu akses ke sistem akademik kini? Klik Portal SIAKAD",
    "ucapan": "Terima kasih banyak atas kesabaran dek awak. Kami komit untuk terus maningkatkan kualitas layanan.",
    "copyright": "© 2025 STIE Dwimulya — Hak cipta dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Hari Kemerdekaan Indonesia"
  },
  "palembang": {
    "judul": "STIE Dwimulya",
    "status": "Website lagi diperbaiki",
    "deskripsi": "Kite lagi nyiapin tampilan baru yang lebih kece dan gampang digunain. Tunggu bentar, bentar lagi bisa dipake lagi.",
    "peluncuran": "31 Hari · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Perlu akses ke sistem akademik sekarang? Klik Portal SIAKAD",
    "ucapan": "Terima kasih banyak atas kesabaran kamu. Kite komit buat terus ningkatin layanan.",
    "copyright": "© 2025 STIE Dwimulya — Semua hak dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Hari Kemerdekaan Indonesia"
  },
  "melayu": {
    "judul": "STIE Dwimulya",
    "status": "Laman web sedang dalam penyelenggaraan",
    "deskripsi": "Kami sedang mempersiapkan pengalaman baru yang lebih menarik untuk anda. Terima kasih kerana sabar menanti—tidak lama lagi laman kami akan beroperasi semula.",
    "peluncuran": "31 Hari · 10 Jam · 18 Minit · 30 Saat",
    "akses": "Perlukan akses ke sistem akademik kami sekarang? Klik Portal SIAKAD",
    "ucapan": "Terima kasih atas kesabaran anda. Kami berkomitmen untuk sentiasa memperbaiki mutu perkhidmatan.",
    "copyright": "© 2025 STIE Dwimulya — Semua hak terpelihara",
    "target": "Target Peluncuran: 17 Ogos 2025 — Hari Kemerdekaan Indonesia"
  }
};

const langKeys = Object.keys(copyData);

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    const langTransitionTimer = setInterval(() => {
      setCurrentLangIndex((prevIndex) => (prevIndex + 1) % langKeys.length);
    }, 3000); // Change language every 3 seconds

    return () => {
      clearInterval(timer);
      clearInterval(langTransitionTimer);
    };
  }, []);

  const handlePortalClick = () => {
    window.open("https://siakad.stiedwimulya.ac.id", "_blank");
  };

  const currentCopy = copyData[langKeys[currentLangIndex]];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-4 font-sans">
      {/* Main Content */}
      <div className="w-full max-w-2xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 transition-opacity duration-500" key={currentCopy.judul}>
          {currentCopy.judul}
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 transition-opacity duration-500" key={currentCopy.status}>
          {currentCopy.status}
        </h2>

        <p className="text-lg text-gray-600 max-w-xl mx-auto transition-opacity duration-500" key={currentCopy.deskripsi}>
          {currentCopy.deskripsi}
        </p>

        {/* Countdown Timer */}
        <Card className="bg-white border border-gray-300 shadow-lg mx-auto max-w-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Launching in:</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{timeLeft.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{timeLeft.hours}</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portal Button */}
        <div className="text-center">
          <p className="text-gray-600 mb-4 transition-opacity duration-500" key={currentCopy.akses}>
            {currentCopy.akses}
          </p>
          <Button
            onClick={handlePortalClick}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Access SIAKAD Portal
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 space-y-2">
          <p className="text-base transition-opacity duration-500" key={currentCopy.ucapan}>
            {currentCopy.ucapan}
          </p>
          <p className="text-sm transition-opacity duration-500" key={currentCopy.copyright}>
            {currentCopy.copyright}
          </p>
          <p className="text-xs transition-opacity duration-500" key={currentCopy.target}>
            {currentCopy.target}
          </p>
        </div>
      </div>
    </div>
  );
}