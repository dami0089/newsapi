import useNoticias from "../hooks/useNoticias";
import { useEffect } from "react";

const Header = () => {
  const { handleModalBuscar, setPais, pais, esBusqueda } = useNoticias();

  useEffect(() => {}, [pais]);

  return (
    <header className="px-4 py-3 bg-white border-b ">
      <div className="md:flex md:justify-between items-center">
        <h2 className="text-4xl text-sky-600 font-black mb-5 md:mb-0 md:flex-row ">
          <span className="text-3xl font-black text-black">News Now!</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleModalBuscar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <button
            type="button"
            className="font-bold uppercase"
            onClick={handleModalBuscar}
          >
            Buscar
          </button>
          {esBusqueda ? '' : <select
            type="button"
            className="text-white text-sm bg-sky-600 p-2 rounded-md uppercase font-bold"
            onChange={(e) => setPais(e.target.value)}
          >
            <option value="us">USA</option>
            <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgica</option>
            <option value="br">Brasil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
          </select>}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
