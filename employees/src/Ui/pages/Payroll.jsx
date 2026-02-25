import { DollarSign, TrendingUp, Users } from "lucide-react";
import Box from "../component/payroll_box";
import Box2 from "../component/payroll_box2";
import Table from "../component/table_payroll"
import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

export default function Payroll() {
  const { employee } = useContext(EmployeeContext);

  const totalSalary = employee.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0);
  const totalBonus = employee.reduce((sum, emp) => sum + (Number(emp.bonus) || 0), 0);
  const totalDeducation = employee.reduce((sum, emp) => sum + (Number(emp.deducation) || 0), 0);

  const totalPayroll = totalSalary + totalBonus - totalDeducation;
  const avgSalary = employee.length > 0 ? totalSalary / employee.length : 0;

  function formatCurrency(value) {
    return `$${value.toLocaleString()}`;
  }

  return (<>    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-emerald-100 p-6 md:ml-72 md:p-10">
      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600/80">
          Payroll
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Payroll Overview</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Track payroll totals, average salary, bonus allocation, and active employees.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <Box title="Total Payroll" icon={<DollarSign size={22} />} total={totalPayroll} color="blue" />
        <Box title="Avg Salary" icon={<TrendingUp size={22} />} total={Math.round(avgSalary)} color="green" />
        <Box title="Employees" icon={<Users size={22} />} total={employee.length} color="orange" />
      </section>
      <section className="flex gap-2 mt-3">
        <Box2
            title="Base Salary"
            total={formatCurrency(totalSalary)}
            description="Total base compensation"
            color="text-slate-900"
            />

            <Box2
            title="Bonuses & Incentives"
            total={formatCurrency(totalBonus)}
            description="Performance bonuses"
            color="text-green-600"
            />

            <Box2
            title="Total Deductions"
            total={formatCurrency(totalDeducation)}
            description="Tax & benefits"
            color="text-red-600"
            />
      </section>
      <section>   
              <Table/>
      </section>
    </main>
    </>

  );
}
