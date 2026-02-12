import { useState } from "react";
import Employee from "../component/table_employee";
import Add from "../component/AddEmplyee";

export default function EmployeePage() {
  const [add, setAdd] = useState(false);
 function ShowAdd(){
    setAdd(true);
 }
 function HideAdd(){
    setAdd(false);
 }
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-emerald-100 p-6 md:ml-72 md:p-10 relative">
      
      <section className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold text-slate-900">Employees</h1>
        <p className="mt-2 mb-5 text-sm text-slate-600">
          Manage your workforce
        </p>

        <button
          onClick={ShowAdd}
          className="mb-6 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700"
        >
          Add Employee
        </button>

        <Employee />
      </section>

      {add && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <Add add={add} setAdd={setAdd} HideAdd={HideAdd}/>
        </div>
      )}
    </main>
  );
}
