import { Eye, Pencil, Trash2 } from "lucide-react";
import { useContext,useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import Modifie from "./ModifyEmployee";
import Shows from "./ShowEmployee";
export default function Employee() {
const { employee, setemployee } = useContext(EmployeeContext);
const [empl,setempl]=useState(null);
const [modify,setModify]=useState(false);
const [show,setshow]=useState(false);
function Delete(id){
  setemployee(prev =>prev.filter(emp =>emp.id !==id))
}
function Modify(emp){
 setModify(true);
 setempl(emp);
}
function Show(emp){
  setempl(emp);
  setshow(true);

}
  return (<>
    <div className="w-full rounded-2xl border border-cyan-200/70 bg-white/90 p-6 shadow-lg backdrop-blur">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Employees
            </p>
            <h1 className="mt-1 text-3xl font-semibold text-slate-900">Employee Directory</h1>
          </div>
          <input
            type="text"
            placeholder="Search by name, email, department..."
            className="w-full rounded-xl border border-cyan-200 bg-cyan-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50 md:w-96"
          />
        </div>
          

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left">
            <thead className="bg-gradient-to-r from-cyan-100 to-emerald-100 text-xs uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Fullname</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Job</th>
                <th className="px-4 py-3 font-semibold">Department</th>
                <th className="px-4 py-3 font-semibold">Salary</th>
                <th className="px-4 py-3 font-semibold">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
 {employee.map(emp => (
    <tr className="border-t border-slate-200 bg-white transition hover:bg-cyan-50/50" key={emp.id}>
      <td className="px-4 py-3 text-black">{emp.name}</td>
      <td className="px-4 py-3">{emp.email}</td>
       <td className="px-4 py-3">{emp.jobTitle}</td>
       <td className="px-4 py-3">
        <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          {emp.depname}
        </span>
      </td>
             <td className="px-4 py-3 font-semibold text-cyan-700">${emp.salary}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4 text-slate-500">
                    <button
                      className="text-blue-600 transition hover:text-blue-700"
                      aria-label="View employee"
                      onClick={()=>Show(emp)}
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      className="text-orange-500 transition hover:text-orange-600"
                      aria-label="Edit employee"
                      onClick={()=>Modify(emp)} >
                      <Pencil size={20} />
                    </button>
                    <button
                      className="text-red-600 transition hover:text-red-700"
                      aria-label="Delete employee"
                      onClick={() => Delete(emp.id)}>
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
    </tr>
  ))}
            </tbody>
          </table>
        </div>
    </div>
    {modify && <Modifie empl={empl} setempl={setempl} setModify={setModify}/>
      }
      {show && <Shows empl={empl} setshow={setshow} />
      }
      </>
  );
}
