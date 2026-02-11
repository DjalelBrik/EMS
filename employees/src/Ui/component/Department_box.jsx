import { Building2, DollarSign, Users } from "lucide-react";

export default function DepartmentBox({name,number_employee,annualBudget}) {
  return (
    <article className="w-full max-w-64 rounded-2xl border border-slate-200 bg-slate-100 p-5 shadow-sm">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-slate-200 text-blue-600">
        <Building2 size={22} strokeWidth={2} />
      </div>

      <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">{name}</h3>

      <div className="border-t border-slate-300 py-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-base text-slate-600">
            <Users size={16} />
            Employees
          </p>
          <span className="text-xl font-semibold text-slate-900">{number_employee}</span>
        </div>
      </div>

      <div className="border-t border-slate-300 py-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-base text-slate-600">
            <DollarSign size={16} />
            Annual Budget
          </p>
          <span className="text-xl font-semibold text-slate-900">${annualBudget}M</span>
        </div>
      </div>

      <div className="mt-3 border-t border-slate-300 pt-4">
        <button
          type="button"
          className="w-full rounded-xl border border-slate-300 bg-slate-200 px-3 py-2 text-base font-semibold text-slate-900 transition hover:bg-white"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
