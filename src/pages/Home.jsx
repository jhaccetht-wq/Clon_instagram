import authGoogle from "../config/authGoogle";
import { useEffect, useState } from "react";
import "../style/home.css"
import Encabezado from "../components/Encabezado";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Menu from "../components/Menu";
import { log } from "firebase/firestore/pipelines";



export default function Home() {



  const [dataMorty, setDataMorty] = useState([])

  useEffect(() => {


    const rickandmory = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character")

        const data = await res.json();
        setDataMorty(data.results);
        console.log(data)

      } catch (error) {
        console.error("error", error.message)

      };


    };

rickandmory()

  }, [])



  return (
    <>
      <div className="w-full">
        <Encabezado />
        <div className="w-screen flex flex-col items-center">
          {dataMorty.map((items) => (
            <div key={items.id} className="bg-white rounded-xl shadow-2xl mb-8 p-3 md:p-4">
              <div className="py-4  flex  items-center gap-5">
                <div className="w-10 h-10 bg-white rounded-full">
                  <img src={items.image} alt="" className="rounded-full" />
                </div>
                <small>{items.name} </small>
              </div>
              <div className="flex flex-col items-center">
                <img src={items.image} alt="" className="max-w-[90%]" />
              </div>
              <div className="flex justify-start w-full gap-4 pt-5    ">
                <FaHeart color="red" />
                <FaRegComment />
                <FiSend />
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );

}