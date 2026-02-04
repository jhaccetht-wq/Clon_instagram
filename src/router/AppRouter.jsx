import { BrowserRouter, Route, Routes } from "react-router-dom";
import Busqueda from "../pages/Busqueda";
import Home from "../pages/Home";
import Publicar from "../pages/Publicar";
import Like from "../pages/Like";
import Perfil from "../pages/Perfil";
import Menu from "../components/Menu";
import Provider from "../components/Provider";

export default function AppRouter() {


    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/busqueda" element={<Busqueda />} />
                    <Route path="/publicar" element={<Publicar />} />
                    <Route path="/like" element={
                        <Provider> <Like />
                        </Provider>
                    } />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}