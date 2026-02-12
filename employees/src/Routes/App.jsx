import { Routes, Route } from "react-router-dom";
import Dashboard from "../Ui/pages/Dashboard";
import Employee from "../Ui/pages/Employee";
import Payroll from "../Ui/pages/Payroll";
import Department from "../Ui/pages/Department";
import Layout from "./layout";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/department" element={<Department />} />
        

      </Route>
    </Routes>
  );
}
