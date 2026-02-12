import { createContext, useState } from "react";
export const EmployeeContext = createContext([]);

export function EmployeeProvider({ children }) {
  const [employee, setemployee] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employee, setemployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

