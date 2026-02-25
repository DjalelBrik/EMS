import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

export default function List(){
    const { employee, setemployee } = useContext(EmployeeContext);

    function UpdateAmount(emp, fieldName) {
      const currentValue = Number(emp[fieldName] ?? 0);
      const nextValue = window.prompt(
        `Enter ${fieldName} amount:`,
        currentValue
      );

      if (nextValue === null) return;

      const parsedValue = Number(nextValue);
      if (!Number.isFinite(parsedValue) || parsedValue < 0) {onabort
        alert("Please enter a valid positive number.");
        return;
      }

      setemployee((prev) =>
        prev.map((item) =>
          item.id === emp.id ? { ...item, [fieldName]: parsedValue } : item
        )
      );
    }

    return<>
    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-4 py-3 text-medium font-semibold text-slate-900">Monthly Payroll Details</h2>
       <table className="w-full border-separate border-spacing-0 p-3 text-left">
        <thead>
          <tr>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Employee</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Department</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Salary</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Bonus</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Deduction</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Total</th>
            <th className="bg-slate-100 px-3 py-2 text-base text-slate-600">Action</th>
          </tr>
        </thead>
         <tbody className="text-small text-left text-slate-900">
          {employee.map((emp) => {
            const salary = Number(emp.salary) || 0;
            const bonus = Number(emp.bonus) || 0;
            const deducation = Number(emp.deducation) || 0;
            const total = salary + bonus - deducation;

            return (
              <tr className="border-b border-slate-200" key={emp.id}>
                <td className="px-3 font-small">{emp.name}</td>
                <td className="px-3">{emp.depname}</td>
                <td className="px-3">{salary}</td>
                <td className="px-3 font-medium text-emerald-600">{bonus}</td>
                <td className="px-3 font-medium text-rose-600">{deducation}</td>
                <td className="px-3 font-semibold text-slate-800">{total}</td>
                <td className="px-3 py-1">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-xl border border-slate-200 bg-emerald-100 p-2 text-emerald-600 transition hover:bg-emerald-200"
                      onClick={() => UpdateAmount(emp, "bonus")}
                      aria-label="Edit bonus"
                    >
                      <Plus size={18} />
                    </button>
                    <button
                      className="rounded-xl border border-slate-200 bg-rose-100 p-2 text-rose-600 transition hover:bg-rose-200"
                      onClick={() => UpdateAmount(emp, "deducation")}
                      aria-label="Edit deduction"
                    >
                      <Minus size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
       </table>
    </div>
    </>
}
