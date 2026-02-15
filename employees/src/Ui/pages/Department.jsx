import Box from "../component/Department_box";
import Add from "../component/AddDepartment"
import { useState } from "react";

export default function Department() {
     const [add, setAdd] = useState(false);
     function ShowAdd(){
        setAdd(true);
     }
     function HideAdd(){
        setAdd(false);
     }
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-emerald-100 p-6 md:ml-72 md:p-10">
      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600/80">
          Department
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Department Overview</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Browse each department with employee counts and annual budget.
        </p>
        <button className="mb-6 mt-3 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700"
        onClick={ShowAdd}>
            Add Department</button>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
       <Box/>
      </section>
      {add && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                <Add HideAdd={HideAdd} setAdd={setAdd} />
              </div>
            )}
    </main>
  );
}
