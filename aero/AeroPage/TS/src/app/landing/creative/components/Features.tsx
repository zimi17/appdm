import {
  LuComponent,
  LuFigma,
  LuLayers,
  LuLayoutGrid,
  LuMonitor,
  LuMoveRight,
  LuPaintbrush,
} from 'react-icons/lu'
import Link from 'next/link'

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Fitur Akademik
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Keunggulan Program Studi
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200 md:grid-cols-2 xl:grid-cols-3">
          <div className="group h-full border-b border-default-200">
            <div className="p-8 sm:p-10">
              <span>
                <LuComponent className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Akuntansi: Pengelolaan Keuangan
              </h2>
              <p className="mb-6 text-base">
                Fokus pada pengelolaan keuangan dan analisis laporan keuangan yang mendalam.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 md:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuMonitor className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Akuntansi: Perpajakan & Audit
              </h2>
              <p className="mb-6  text-base">
                Mempelajari perpajakan, audit, dan pemahaman sistem keuangan secara komprehensif.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 xl:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayers className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Manajemen: Strategi Bisnis
              </h2>
              <p className="mb-6  text-base">
                Mengembangkan strategi bisnis dan kepemimpinan untuk menghadapi tantangan pasar.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-s border-default-200 xl:border-0">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayoutGrid className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Manajemen: Pengelolaan Tim
              </h2>
              <p className="mb-6  text-base">
                Fokus pada pengelolaan tim dan pengambilan keputusan yang efektif dalam bisnis.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 md:border-b-0 xl:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuFigma className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Akuntansi: Keahlian Profesional
              </h2>
              <p className="mb-6  text-base">
                Mempersiapkan mahasiswa dengan keahlian profesional untuk menjadi akuntan yang kompeten.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-default-200 md:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuPaintbrush className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                S1 Manajemen: Inovasi & Kewirausahaan
              </h2>
              <p className="mb-6  text-base">
                Mendorong inovasi dan semangat kewirausahaan di kalangan mahasiswa manajemen.
              </p>
              <Link href="" className="text-lg text-default-950">
                Selengkapnya
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
