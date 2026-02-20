import{LayoutDashboard,DollarSign, Users, Building2, Settings, StickyNoteIcon } from "lucide-react"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-slate-50/80 px-6 py-6 text-slate-700 backdrop-blur">
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white">
            ES
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Employee Suite
            </span>
            <span className="text-lg font-semibold text-slate-900">Operations</span>
          </div>
        </div>

        <div className="mb-5 space-y-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span>Overview</span>
        </div>

        <div className="mb-6 flex flex-col gap-1 text-[15px] font-medium">
          <Link to="/" className="group flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-slate-200" >
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            <LayoutDashboard />
            Dashboard
          </Link>
          <Link to="/employee" className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm" >
            <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900" />
            <Users/>
            Employees
          </Link>
          <Link to="/department" className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm" >
            <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900" />
            <Building2/>
            Department
          </Link>
          <Link to="/payroll" className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm" >
            <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900" />
            <DollarSign/>
            Payroll
          </Link>
          <Link className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm" to="/leave">
            <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900" />
             <StickyNoteIcon/>
            Leave Request
          </Link>
          <a className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm" href="#">
            <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900" />
           <Settings/>
            Settings
          </a>
        </div>
      </nav>
    </>
  );
}
