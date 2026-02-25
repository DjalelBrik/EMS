import { Building2, DollarSign, StickyNote, Users } from "lucide-react";
import Box from "../component/Dashboard_box";
import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { DepartmentContext } from "../../context/DepartmentContext";
import { LeaveContext } from "../../context/LeaveContext";

export default function Dashboard() {
  const {employee}=useContext(EmployeeContext);
  const {department}=useContext(DepartmentContext);
  const {request}=useContext(LeaveContext);
   const totalSalary = employee.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-emerald-100 p-6 md:ml-72 md:p-10">
      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600/80">
          Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Workforce Overview</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Quick insights for employees, departments, payroll, and leave requests.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Box text="Total of employees" Icon={<Users size={20} />} number={employee.length} tone="blue" />
        <Box text="Total of Department" Icon={<Building2 size={20} />} number={department.length} tone="green" />
        <Box text="Monthly payroll" Icon={<DollarSign size={20} />} number={totalSalary} tone="cyan" />
        <Box text="Number of Leave Request" Icon={<StickyNote size={20} />} number={request.length} tone="teal" />
      </section>
    </main>
  );
}
