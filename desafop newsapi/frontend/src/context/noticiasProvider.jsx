import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clinteAxios";
// import { useNavigate } from "react-router-dom";

// import { io } from "socket.io-client";

// let socket;

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [proyecto, setProyecto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [modalFormularioTarea, setModalFormularioTarea] = useState(false);
  const [tarea, setTarea] = useState({});
  const [modalEliminarTarea, setModalEliminarTarea] = useState(false);
  const [colaborador, setColaborador] = useState({});
  const [modalEliminarColaborador, setModalEliminarColaborador] =
    useState(false);
  const [buscador, setBuscador] = useState(false);
  const [pais, setPais] = useState("us");

  const [noticias, setNoticias] = useState([]);
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [modalBuscar, setModalBuscar] = useState(false);
  const [esBusqueda, setEsBusqueda] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const { data } = await clienteAxios.get(
          `/top-headlines?country=${pais}`
        );
        console.log(data);
        setNoticias(data.articles);
        console.log(noticias);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerNoticias();
  }, [pais]);

  const handleModalBuscar = () => {
    setModalBuscar(!modalBuscar);
  };

  const buscarNoticia = async (busqueda, from, to) => {
    try {
      const { data } = await clienteAxios.get(
        `/search?q=${busqueda}&from=${from}&to=${to}`
      );
      console.log(data);
      setNoticias(data.articles);
      handleModalBuscar();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuscador = () => {
    setBuscador(!buscador);
  };

  return (
    <NoticiasContext.Provider
      value={{
        noticias,
        handleBuscador,
        buscador,
        setPais,
        pais,
        buscarNoticia,
        handleModalBuscar,
        resultadoBusqueda,
        modalBuscar,
        esBusqueda,
        setEsBusqueda,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
