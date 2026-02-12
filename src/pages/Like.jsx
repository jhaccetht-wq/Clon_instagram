import {  useEffect, useState } from "react";

export default function Like(){

// const primero = () =>{
//     console.log("se imprime primero")
//   }

//   primero();

//   const segundo = () =>{
//          setTimeout(() => {
//           console.log("hola despues de 3 segundos")
//          }, 3000 )
//   };

//   segundo();

//   const tercero = () => {
//     console.log("se imprime tercero")
//   };
//   tercero()


// for (let index = 0; index < array.length; index++) {

const [obtener, setObtener] = useState(0);
const [activo, setActivo] = useState(false)

 useEffect(() => {
    if (!activo) return;

    const tiempo = setTimeout(() => {
      setObtener(obtener + 1);
    }, 1000);

    return () => clearTimeout(tiempo);
  }, [obtener, activo]);





  

return(

<>
<div className="ml-40 mt-6">
  {obtener}
</div>
<div className="flex gap-6  p-10">
<button className="font-bold  cursor-pointer border p-3" onClick={() => setActivo(true) } > Iniciar</button>
<button className="font-bold cursor-pointer border p-3 " onClick={() => setActivo(false) }> Parar </button>
<button className="font-bold cursor-pointer border p-3" onClick={() => setObtener(0) } > Reiniciar </button>
</div>
</>

  )
}