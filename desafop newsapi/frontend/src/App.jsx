import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./layouts/RutaProtegida";

import Noticias from "./paginas/Noticias";

import { NoticiasProvider } from "./context/noticiasProvider";

function App() {
  return (
    <BrowserRouter>
      <NoticiasProvider>
        <Routes>
          <Route path="/" element={<RutaProtegida />}>
            <Route index element={<Noticias />} />
          </Route>
        </Routes>
      </NoticiasProvider>
    </BrowserRouter>
  );
}

export default App;
