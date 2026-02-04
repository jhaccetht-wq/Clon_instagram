import { createContext, useContext, useState } from "react"
import auth from "../config/firebaseSDK";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();


export default function AuthProvider({ children }) {

    const [userInfor, setUserInfor] = useState(null)

    onAuthStateChanged(auth, (user) => {
        if (user) {

            setUserInfor(user);

        } else {
            setUserInfor(null)
        }
    });

    return (

        <>
            <AuthContext.Provider value={{ userInfor }}> {children} </AuthContext.Provider>






        </>


    )

}

export function useAuth() {

    return useContext(AuthContext)
}