import { CgProfile } from "react-icons/cg";
import { FaHeart, FaHome, FaPlusCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Menu() {

    return (

        <>
            <header className="w-screen h-15 flex items-center justify-center bg-white border-t border-[black] fixed bottom-0">
                <nav className=" flex gap-5 justify-around items-center w-full">
                    <Link to="/">
                        <FaHome size={24} />
                    </Link>
                    <Link to="/busqueda" >
                        <FaSearch size={24} />
                    </Link>
                    <Link to="/publicar">
                        <FaPlusCircle size={24} />
                    </Link>
                    <Link to="/like">
                        <FaHeart size={24} color="red" />
                    </Link>
                    <Link to="/perfil">
                        <CgProfile size={24} />

                    </Link>
                </nav>
            </header >
        </>



    )

}