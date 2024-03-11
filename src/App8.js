import React from 'react'
import { useState, createContext, useContext } from 'react'
import child from "./child";
export const useContext = createContext();

export default function App8() {

    const[user, setUser] = useState("John");
    const[email, setEmail] = useState("john@gmail.com");

  return (
    <>
    <UserContext.Provider value ={{user, email}}>
        <h2>Hello {user} from App8 component</h2>
        <child/>

    </UserContext.Provider>
    
    </>

  )
}
