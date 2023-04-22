import { useState, useEffect } from "react";
import PreviewNoticia from "../components/PreviewNoticia";
import useNoticias from "../hooks/useNoticias";
import Pagination from "react-paginate";
import ModalNuevoMovimiento from "../components/ModalFormularioBuscar";
import { ToastContainer } from "react-toastify";

const Noticias = () => {
  const { noticias, esBusqueda, setEsBusqueda } = useNoticias();
  const [currentPage, setCurrentPage] = useState(1);
  const [noticiasPerPage] = useState(10);

  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = noticias.slice(
    indexOfFirstNoticia,
    indexOfLastNoticia
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleClick = () => {
    setEsBusqueda(false);
    window.location.reload();
  };

  return (
    <>
      {esBusqueda ? (
        <div className="flex justify-between">
          <h1 className="text-xl text-slate-800 font-bold">
            Resultados de la busqueda...{" "}
          </h1>
          <a
            onClick={handleClick}
            className="text-gray-600 cursor-pointer hover:text-gray-800 uppercase text-sm font-bold mt-2 bg-blue-200 hover:bg-blue-400 rounded-lg p-2"
          >
            Reiniciar Busqueda
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="bg-white shadow mt-5 rounded-lg">
        {currentNoticias.length ? (
          currentNoticias.map((noti) => (
            <PreviewNoticia key={noti.title} news={noti} />
          ))
        ) : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay noticias aun
          </p>
        )}
      </div>
      <Pagination
        pageCount={Math.ceil(noticias.length / noticiasPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex items-center justify-center mt-10"}
        activeClassName={"active"}
        previousLabel={<span className="flex-1">&lt;</span>}
        nextLabel={<span className="flex-none">&gt;</span>}
        disabledClassName={"disabled"}
        initialPage={currentPage - 1}
        pageLinkClassName={
          "inline-block px-3 py-1 rounded-lg bg-white text-black mx-1 hover:bg-gray-100"
        }
        activeLinkClassName={"bg-blue-200 text-white"}
      />
      <ModalNuevoMovimiento />
      
    </>
  );
};

export default Noticias;
