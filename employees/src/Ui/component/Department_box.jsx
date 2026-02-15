import { Building2, DollarSign, Key, Users } from "lucide-react";
import { useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";

export default function DepartmentBox({name,number_employee,annualBudget}) {
  const {department,setdep}=useContext(DepartmentContext)
  return (
    <>
    {department.map(dep=>(

    <article className="w-full max-w-64 rounded-2xl border border-slate-200 bg-slate-100 p-5 shadow-sm hover:shadow-xl hover:shadow-gray-300 transition hover:-translate-y-1">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-slate-200 text-blue-600">
        <Building2 size={22} strokeWidth={2} />
      </div>

        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{dep.depname}</h3>

      <div className="border-t border-slate-300 py-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-base text-slate-600">
            <Users size={16} />
            Employees
          </p>
          <span className="text-xl font-semibold text-slate-900">{dep.headcount}</span>
        </div>
      </div>

      <div className="border-t border-slate-300 py-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-base text-slate-600">
            <DollarSign size={16} />
            Annual Budget
          </p>
          <span className="text-xl font-semibold text-slate-900">${dep.annual}M</span>
        </div>
      </div>
    </article>
    ))}
</>
  );
}
