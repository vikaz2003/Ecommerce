import { createContext,useContext } from "react";



export const UserContext=createContext({
    users:{},
    setUsers:()=>{}
})


export const UserProvider=UserContext.Provider;



export default function useUser(){
    return useContext(UserContext)
}

