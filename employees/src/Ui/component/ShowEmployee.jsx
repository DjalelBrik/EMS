import { X } from "lucide-react";

export default function Show({ empl, setshow }) {
  if (!empl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Employee Details
          </h2>
          <button onClick={() => setshow(false)}>
            <X className="text-slate-600 hover:text-red-500" />
          </button>
        </div>

        <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">

          <div>
            <p className="font-semibold text-slate-500">Full Name</p>
            <p className="text-lg text-black">{empl.name}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Email</p>
            <p>{empl.email}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Phone</p>
            <p>{empl.phone}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Address</p>
            <p>{empl.address}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Job Title</p>
            <p>{empl.jobTitle}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Department</p>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {empl.depname}
            </span>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Salary</p>
            <p className="font-semibold text-cyan-700">${empl.salary}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Join Date</p>
            <p>{empl.joindate}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Manager</p>
            <p>{empl.manager}</p>
          </div>

        </div>

        <div className="mt-6 text-right">
          <button
            onClick={() => setshow(false)}
            className="rounded-xl bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
