import { FiInstagram } from "react-icons/fi"
import { useAuth } from "../context/AuthProvider"
import Google from "../assets/googlee.png"
import { use, useEffect, useState } from "react"
import correoAuth from "../config/correoAuth"
import { useNavigate } from "react-router-dom"
import authGoogle from "../config/authGoogle"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


export default function Busqueda() {

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [mostrar, setMostrar] = useState(false)


    const navigate= useNavigate();

    const handelForm = (e) => {
        e.preventDefault();
        console.log("correo", correo)
        console.log("password", password);

        correoAuth(correo, password)




    }


const handeGoogle = () => {
  authGoogle()
    .then((result) => {
      if (result.user) {
        console.log("LOGIN OK", result.user);
        navigate("/");
      }
    })
    .catch((error) => {
      alert("Error al iniciar sesión con Google");
      console.error(error);
    });
};


    return (

        <>
            <div className="w-screen h-screen flex justify-center  items-center bg-white ">
                <div className=" rounded-3xl bg-amber-50 shadow-2xl py-15 px-10   ">
                    <div className="flex flex-col justify-center items-center gap-2 pb-5">
                        <FiInstagram size={28} className="text-pink-500  " />
                        <h1 className="text-1xl font-bold text-center mb-6 font-sans">Iniciar Seccion</h1>
                        <button onClick={handeGoogle} className="bg-black px-5 py-2 text-white rounded-2xl flex gap-6">
                            <img src={Google} alt="" className="w-5 h-5" />
                            Continuar con Google</button>
                    </div>
                    <form onSubmit={handelForm} action="" className="flex flex-col gap-8">

                        <input type="email" placeholder="Correo electronico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="border border-black rounded-2xl px-5 py-2" required />
                        <div className="relative">
                            <input type={mostrar ? 'text' : 'password'} placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border w-full relative border-black rounded-2xl px-5 py-2" required />
                                <span onClick={() => setMostrar(!mostrar)} className="absolute right-4 bottom-2 cursor-pointer">
                                    {mostrar ? (<AiOutlineEye size={24}/>) : (<AiOutlineEyeInvisible size={23} />)}
                                </span>
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white border rounded-lg h-9 hover:bg-blue-600 transition " >Entrar</button>

                    </form>
                </div>
            </div>


        </>

    )

}