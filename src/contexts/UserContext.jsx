import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem('user')) ?? null
    )
}

useEffect(() => {
   
}, [user])