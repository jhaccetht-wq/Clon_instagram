import { useEffect, useState } from "react"

export default function Publicar() {


  // const mountainRef = ref(storage, "imagenes")

  const [dragon, setDragon] = useState([]);
  const [activo, setActivo] = useState(null)

  useEffect(() => {

    const dragonball = async () => {


      try {

        const res = await fetch("https://dragonball-api.com/api/characters")

        const data = await res.json();
        setDragon(data.items);
        console.log(data.items)


      } catch (error) {
        console.error("error:", error.massage)

      }
    }

    dragonball()

  }, [])



  return (
    <>
      {/* <div>
    <form action="">
    <label htmlFor="subir-img" className="text-blue-800">Subir imagen</label>
    <input type="file" id="subir-img" accept="image/*" />
</form>

</div> */}

      <div className="grid grid-cols-4 md:grid-cols-3 gap-6 p-6">
        {dragon.map((ball) => (
          <div
            key={ball.id}
            onMouseEnter={() => setActivo(ball.id)}
            onMouseLeave={() => setActivo(null)}
            className=""
          >
            <div className={`aspect-square w-full bg-black flex flex-col items-center rounded-2xl relative ${ activo === ball.id} ` }>
              
            </div>

            {activo === ball.id && (
              <div className="p-3 text-center">
                <p className="font-bold text-lg">{ball.name}</p>
                <p className="text-sm">{ball.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>




    </>

  )

}