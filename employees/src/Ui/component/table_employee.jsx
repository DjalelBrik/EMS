import { Eye, Pencil, Trash2 } from "lucide-react";

export default function Employee() {
  return (
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
              <tr className="border-t border-slate-200 bg-white transition hover:bg-cyan-50/50">
                <td className="px-4 py-3 font-medium text-slate-900">djalel</td>
                <td className="px-4 py-3">djalel@gmai.con</td>
                <td className="px-4 py-3">Front-dev</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    NTIC
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-cyan-700">$40,000</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4 text-slate-500">
                    <button
                      className="text-blue-600 transition hover:text-blue-700"
                      aria-label="View employee"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      className="text-orange-500 transition hover:text-orange-600"
                      aria-label="Edit employee"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      className="text-red-600 transition hover:text-red-700"
                      aria-label="Delete employee"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
