export default function Admin(){

    const cual = import.meta.env.VITE_KEY_API;
    const appName = import.meta.env.VITE_KEY_API;
    console.log(appName)
    console.log(cual)

return(
<>


<form action="">
    <label htmlFor="subir-img" className="text-blue-800">Subir imagen</label>
    <input type="file" id="subir-img" accept="image/*" />
</form>

</>





)


}