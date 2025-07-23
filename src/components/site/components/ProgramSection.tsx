export function ProgramSection() {
  const programs = [
    {
      title: "Manajemen Bisnis",
      description: "Program studi yang mempersiapkan mahasiswa untuk menjadi manajer dan entrepreneur yang kompeten di era digital.",
      color: "bg-red-600"
    },
    {
      title: "Akuntansi",
      description: "Program studi yang menghasilkan akuntan profesional dengan kemampuan analitis dan etika yang tinggi.",
      color: "bg-blue-600"
    },
    {
      title: "Ekonomi Pembangunan",
      description: "Program studi yang fokus pada pembangunan ekonomi berkelanjutan dan kebijakan publik.",
      color: "bg-green-600"
    },
    {
      title: "Keuangan",
      description: "Program studi yang mempersiapkan ahli keuangan untuk industri perbankan dan investasi.",
      color: "bg-purple-600"
    }
  ]

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 font-serif">
            Program Studi Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Pendidikan yang dinamis dan inovatif untuk pemimpin di setiap tingkat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`${program.color} text-white p-8 hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <h3 className="text-lg mb-4">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}