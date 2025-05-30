import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center sm:ml-4 sm:mr-4 md:mr-15 pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            {/* Image  */} 
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              loading="lazy"
              className="w-10 rounded-md"
            />
            {/* Image  */}
            <q>"Kode yang indah, lahir dari ketekunan.😊"</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Revaldo Ramadana
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
            terutama pada pembuatan Website dan Desain seperti Poster,
            Packaging, Digital Art, ketertarikan pada bidang ini sudah
            berlangsung lebih dari 2 tahun untuk semua bidang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"
            >
              Download CV <i class="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        {/* Image  */}
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          loading="lazy"
          className="w-[500px] sm:ml-auto md:ml-auto sm:mr-auto md:mr-auto mt-10 xl:mr-10 rounded-4xl"
        />
        {/* Image  */}
      </div>

      {/* Tentang */}

      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          {/* Image  */}
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            loading="lazy"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          {/* Image  */}
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Revaldo Ramadana, seorang Front End Web
            Developer dan Designer untuk UI/UX Design maupun Product Digital,
            Saya percaya bahwa desain dan fungsionalitas harus berjalan
            beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang
            optimal.
          </p>
          <div className="flex items-center justify-between">
            {/* Image  */}
            <img
              src={DataImage.HeroImage}
              alt="Image"
              loading="lazy"
              className="w-12 rounded-md sm:block hidden"
            />
            {/* Image  */}
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Bulan Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-23">
          <h1>Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 mc:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools yang digunakan untuk pembuatan website
            ataupun design
          </p>
          {/* Grid Card Tentang */}
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {" "}
            {/* Grid Card Tentang */}
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
                hover:bg-zinc-800 group"
                key={tool.id}
              >
                {/* Image  */}
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  loading="lazy"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                {/* Image  */}
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-20">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut beberapa proyek yang telah saya buat
        </p>
        {/* Grid Card Proyek*/}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {" "}
          {/* Grid Card Proyek*/}
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="w-full rounded-2xl"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
    </>
  );
}

export default App;
