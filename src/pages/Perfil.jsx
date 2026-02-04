import foto from "../assets/fotop.jpg"


export default function Perfil() {



    return (

        <>

            <div className="w-screen flex  justify-center mt-7">
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
                        <p className="text-sm text-gray-600">Perfil personal</p>
                        <p className="font-sans">Usuario encontrado en un bosque comiendo banana</p>
                    </div>
                </div>
            </div>


        </>

    )

}