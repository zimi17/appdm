export function AdmissionSection() {
  const admissionSteps = [
    {
      step: "01",
      title: "Pendaftaran Online",
      description: "Lengkapi formulir pendaftaran online dan upload dokumen yang diperlukan melalui portal akademik kami."
    },
    {
      step: "02", 
      title: "Tes Masuk",
      description: "Ikuti tes tertulis dan wawancara untuk mengevaluasi kemampuan akademis dan motivasi belajar."
    },
    {
      step: "03",
      title: "Pengumuman",
      description: "Hasil seleksi akan diumumkan melalui website dan email. Calon mahasiswa yang diterima akan mendapat panduan selanjutnya."
    }
  ]

  return (
    <section id="pendaftaran" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 font-serif">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mulai perjalanan pendidikan Anda di STIE Dwimulya. Proses pendaftaran yang sederhana 
            dan transparan untuk calon mahasiswa yang berkomitmen tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {admissionSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white text-lg mb-6">
                {step.step}
              </div>
              <h3 className="text-lg mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="bg-gray-50 p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-4 font-serif">
                Tanggal Penting Tahun Akademik 2025/2026
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Pendaftaran Gelombang 1</span>
                  <span className="text-gray-600">1 Februari - 31 Maret 2025</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Tes Masuk Gelombang 1</span>
                  <span className="text-gray-600">15 April 2025</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Pengumuman Hasil</span>
                  <span className="text-gray-600">30 April 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Tahun Akademik Dimulai</span>
                  <span className="text-gray-600">September 2025</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-black text-white px-12 py-4 mb-4 hover:bg-gray-800 transition-colors">
                Daftar Sekarang
              </button>
              <p className="text-sm text-gray-600">
                Atau hubungi kami di <br />
                <span className="font-medium">0821-1234-5678</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}