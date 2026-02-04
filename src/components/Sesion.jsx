import { useState } from "react";
import authGoogle from "../config/authGoogle";

export default function Sesion() {
const [abierto, setAbierto] = useState(false);
  const [lenguaje, setLenguaje] = useState("idioma")
  const escoger = (lang) => {
    setLenguaje(lang);
    setAbierto(false)
    return (
        <div>
            <div className="flex flex-col items-center pt-6 gap-10">


                <div className="relative">
                    <button
                        onClick={() => setAbierto(!abierto)}
                        className="bg-black text-blue-700 px-4 py-2 rounded-lg"
                    >
                        ESPAÑOL (ESPAÑA) 🌐 ⬇
                    </button>

                    {abierto && (
                        <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg w-40">
                            <li onClick={() => escoger("Español")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇪🇸 Español</li>
                            <li onClick={() => escoger("English")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇺🇸 English</li>
                            <li onClick={() => escoger("Português")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇧🇷 Português</li>
                        </ul>
                    )}
                </div>

                <div>
                    <h1 className="ig">INSTRAGAM</h1>
                </div>
                <div>
                    <button className="botongoogle" onClick={() => authGoogle()}> Inicia seccion con google</button>


                </div>

            </div>
        </div>
    )}
}