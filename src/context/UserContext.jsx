import { createContext } from "react";



export const UserContext = createContext();

const  UserContextProvider = ({children}) => { 
    const username ="suhib "
console.log("UserContextProvider rendered");
return <UserContext.Provider value={username} >
    {children}
</UserContext.Provider>
} 

    export default UserContextProvider;