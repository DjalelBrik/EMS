import { createContext, useState } from "react";
export const DepartmentContext=createContext([]);
export function DepartmentProvider({children}){
    const [department,setdep]=useState([]);
    return(
        <DepartmentContext.Provider value={{department,setdep}}>
            {children}
        </DepartmentContext.Provider>
    );
}


