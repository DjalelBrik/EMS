import { LayoutDashboard, DollarSign, Users, Building2, Settings, StickyNoteIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "group flex items-center gap-3 rounded-lg border border-black bg-white px-3 py-2 text-slate-900 shadow-sm"
      : "group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white hover:text-slate-900 hover:shadow-sm";

  const dotClass = (isActive) =>
    isActive ? "h-2 w-2 rounded-full bg-slate-900" : "h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-900";

  return (
    <>
      <nav className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-slate-50/80 px-6 py-6 text-slate-700 backdrop-blur">
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white">ES</div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Employee Suite</span>
            <span className="text-lg font-semibold text-slate-900">Operations</span>
          </div>
        </div>

        <div className="mb-5 space-y-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span>Overview</span>
        </div>

        <div className="mb-6 flex flex-col gap-1 text-[15px] font-medium">
          <NavLink to="/" end className={navClass}>
            {({ isActive }) => (
              <>
                <span className={dotClass(isActive)} />
                <LayoutDashboard />
                Dashboard
              </>
            )}
          </NavLink>

          <NavLink to="/employee" className={navClass}>
            {({ isActive }) => (
              <>
                <span className={dotClass(isActive)} />
                <Users />
                Employees
              </>
            )}
          </NavLink>

          <NavLink to="/department" className={navClass}>
            {({ isActive }) => (
              <>
                <span className={dotClass(isActive)} />
                <Building2 />
                Department
              </>
            )}
          </NavLink>

          <NavLink to="/payroll" className={navClass}>
            {({ isActive }) => (
              <>
                <span className={dotClass(isActive)} />
                <DollarSign />
                Payroll
              </>
            )}
          </NavLink>

          <NavLink to="/leave" className={navClass}>
            {({ isActive }) => (
              <>
                <span className={dotClass(isActive)} />
                <StickyNoteIcon />
                Leave Request
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
