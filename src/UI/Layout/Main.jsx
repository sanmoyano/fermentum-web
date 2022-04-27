import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Cervezas from "../Pages/Cervezas";
import Servicios from "../Pages/Servicios";
import Donde from "../Pages/Donde";
import Nosotros from "../Pages/Nosotros";
import Contacto from "../Pages/Contacto";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Cervezas />} path="/cervezas" />
                <Route element={<Servicios />} path="/servicios" />
                <Route element={<Donde />} path="/donde" />
                <Route element={<Nosotros />} path="/nosotros" />
                <Route element={<Contacto />} path="/contacto" />
            </Routes>
        </main>
    );
};

export default Main;
