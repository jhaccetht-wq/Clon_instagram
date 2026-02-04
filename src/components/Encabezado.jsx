import {
    AiOutlineCamera,          // Cámara
    AiOutlineHeart,           // Notificación / “Me gusta”
    AiOutlineSend             // Avioncito / enviar mensaje
} from "react-icons/ai";


export default function Encabezado() {

    return (
        <>
            <header className="w-screen flex items-center h-15 justify-between  border-b border-gray-200 bg-white sticky top-0 z-1 ">
                <div className="flex items-center ">
                    <AiOutlineCamera className="text-3xl cursor-pointer " />
                </div>
                <div className="flex justify-center">
                    <h1 className="font-[Billabong] text-3xl"> Intragam</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer">
                        <AiOutlineHeart className="text-3xl" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full">  </span>


                    </div>
                    <AiOutlineSend className="text-3xl cursor-pointer mr-3" />
                </div>






            </header>





        </>





    )



}