import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between bg-zinc-800 rounded-b-2xl selection:bg-violet-500">
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent sm:ml-6 md:text-white transition-all md:transition-none z-50">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100
         bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50 ${
           active ? "-top-0 opacity-100" : "-top-0 opacity-100"
         }`}
      >
        <li>
          <a href="#beranda" className="sm:text-lg duration-300 hover:text-violet-500 hover:scale-105 text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg duration-300 hover:text-violet-500 text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg duration-300 hover:text-violet-500 text-base font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg duration-300 hover:text-violet-500 text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
