export default function Add({HideAdd}) {
  return (
    <div className="mx-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-cyan-200/70 bg-white p-6 shadow-lg">
      <h2 className="mb-1 text-2xl font-semibold text-slate-900">Add Employee</h2>
      <p className="mb-6 text-sm text-slate-600">Fill in employee information below.</p>

      <form className="space-y-4">
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Full name</label>
          <input
            type="text"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>
         <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
         <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Phone Number</label>
            <input
              type="text"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
           <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Address</label>
            <input
              type="text"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
          </div>
        <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Job Title</label>
            <input
              type="text"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Department name</label>
            <input
              type="text"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
        </div>
        <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Salary</label>
          <input
            type="number"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>
         <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Join Date</label>
          <input
            type="date"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>
        </div>
           <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Manager Name</label>
          <input
            type="text"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>
         
        <div className="flex items-center gap-3 pt-2">
          <button onClick={HideAdd}
            type="submit"
            className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Add
          </button>
          <button
          onClick={HideAdd}
            type="button"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
