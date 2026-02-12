import { FaChevronDown } from "react-icons/fa"
import foto from "../assets/fotop.jpg"
import selva from "../assets/Selva.jpg"
import moto from "../assets/Moto.jpg"
import gym from "../assets/Gym.jpg"
import compu from "../assets/compu.jpg"



export default function Perfil() {

    const historias = [

        {
            id: "1",
            nombre: "Selva",
            imag: selva
        },
        {
            id: "2",
            nombre: "Gym",
            imag: gym
        },
        {
            id: "3",
            nombre: "Programacion",
            imag: compu
        },
        {
            id: "4",
            nombre: "Weekend",
            imag: moto

        }

    ]

    return (

        <>

            <div className="w-screen flex flex-col justify-center items-center mt-7">
                <div className="flex flex-col gap-4">
                    <div className="flex   items-center gap-10">
                        {/* esta va ser la foto de perfil */}
                        <div className="w-24 h-24 rounded-full shadow-lg shadow-black/30 flex items-center justify-center">
                            <img
                                src={foto}
                                alt="perfil"
                                className="w-full h-full rounded-full object-cover"
                            />
                            {/* esto los datos del perfil */}
                        </div>
                        <div className="flex gap-10 text-center">
                            <div>
                                <p className="font-semibold text-lg">1</p>
                                <p className="text-sm text-gray-950">Publicaciones</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">870</p>
                                <p className="text-sm text-gray-950">Seguidores</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">235</p>
                                <p className="text-sm text-gray-950">Seguidos</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <h1 className="font-bold">Usuario del mono</h1>
                        <p className="text-sm text-gray-600">Perfil profesional</p>
                        <p className="font-sans">Desarrollador Web/Frontend Developer</p>
                    </div>
                    <div className="flex gap-5 ">
                        <button className=" bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition">Follow</button>
                        <div className="flex gap-2">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-lg font-semibold transition">Send Mensaje</button>
                            <div className="mt-0.5 w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                                <FaChevronDown className="text-lg text-gray-700" />

                            </div>
                        </div>

                    </div>
                    <div className="flex gap-3 mt-3">
                        {historias.map((historia) => (
                            <div key={historia.id} className="flex flex-col items-center gap-1">
                                <div className="w-19 h-19 rounded-full  bg-yellow-50">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center cursor-pointer">
                                        <img
                                            src={historia.imag}
                                            alt={historia.nombre}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>

                                </div>
      <p className="text-xs text-gray-800 font-bold">{historia.nombre}</p>


                            </div>
                        ))}


                    </div>


                </div>



            </div>


        </>

    )

}