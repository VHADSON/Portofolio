import DataImage from "./data";
import { listTools } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <a>Kode yang indah, lahir dari ketekunan.😊</a>
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
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
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
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-b-4xl"
        />
      </div>

      {/* Tentang */}

      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Revaldo Ramadana, seorang Front End Web
            Developer dan Designer untuk UI/UX Design maupun Product Digital,
            Saya percaya bahwa desain dan fungsionalitas harus berjalan
            beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang
            optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
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
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
                hover:bg-zinc-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
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
    </>
  );
}

export default App;
