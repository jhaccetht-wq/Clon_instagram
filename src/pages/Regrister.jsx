import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Regrister(){


    return(

<>

<div className="w-screen flex justify-center items-center">
<div className="rounded-3xl bg-amber-50 shadow-2xl py-15 px-10">
    <div className="flex flex-col justify-center items-center">
                               <FiInstagram size={30} className="text-pink-500  " />

    </div>
    
    <form action="" className="flex flex-col  py-5">
   <h2>Nombre de usuario</h2>
   <input type="text" placeholder="Ingrese su nombre de usuario"  className="border border-black rounded-2xl px-5 py-2"/>
   <h2>Contraseña</h2>
   <input type="password" placeholder="Ingrese su contraseña" className="border border-black rounded-2xl px-5 py-2"/>



    </form>
    
    <div>
        <h1>Ya tienes cuenta? <Link to={"/busqueda"} className="font-medium text-blue-500 underline underline-offset-4 decoration-2
             hover:text-blue-600">Inicie seccion aca</Link></h1>
    </div>
</div>

</div>

</>

        
    )
}