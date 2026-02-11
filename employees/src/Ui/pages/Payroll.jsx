import { DollarSign, TrendingUp, Users } from "lucide-react";
import Box from "../component/payroll_box";
import Box2 from "../component/payroll_box2";
import Table from "../component/table_payroll"

export default function Payroll() {
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

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Box title="Total Payroll" icon={<DollarSign size={22} />} total={71046} color="blue" />
        <Box title="Avg Salary" icon={<TrendingUp size={22} />} total={7823} color="green" />
        <Box title="Total Bonus" icon={<TrendingUp size={22} />} total={8723} color="purple" />
        <Box title="Employees" icon={<Users size={22} />} total={9} color="orange" />
      </section>
      <section className="flex gap-2 mt-3">
        <Box2
            title="Base Salary"
            total="$77,750"
            description="Total base compensation"
            color="text-slate-900"
            />

            <Box2
            title="Bonuses & Incentives"
            total="+$4,547"
            description="Performance bonuses"
            color="text-green-600"
            />

            <Box2
            title="Total Deductions"
            total="-$11,660"
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
