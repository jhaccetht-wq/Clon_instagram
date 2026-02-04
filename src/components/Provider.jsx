import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { children } from "react";

export default function Provider(){

const {userInfo} = useAuth();

const location = useLocation();

if (!userInfo) {
    return <Navigate  to='/busqueda'  state={{from: location.pathname}} />
    
}

return {children} ;


}