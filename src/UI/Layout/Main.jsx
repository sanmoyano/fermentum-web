import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto";
import ItemListContainer from "../Container/ItemListContainer";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<ItemListContainer />} path="/cat/:idCat" />
                <Route element={<ItemListContainer />} path="/cat/:idCat" />
                <Route element={<ItemListContainer />} path="/cat/:idCat" />
                <Route element={<ItemListContainer />} path="/cat/:idCat" />
                <Route element={<Contacto />} path="/contacto" />
            </Routes>
        </main>
    );
};

export default Main;
