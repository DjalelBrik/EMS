import { createContext, useState } from "react";
export const LeaveContext = createContext(null);

export function LeaveProvider({ children }) {
  const [request, setrequest] = useState([]);
  return (
    <LeaveContext.Provider value={{ request, setrequest }}>
      {children}
    </LeaveContext.Provider>
  );
}
