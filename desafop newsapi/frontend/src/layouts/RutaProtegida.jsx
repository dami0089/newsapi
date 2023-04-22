import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const RutaProtegida = () => {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="md:flex md:min-h-screen">
        <main className="flex-1 p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RutaProtegida;
