import {Edit } from "lucide-react";

export default function List(){
    return<>
    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-4 py-3 text-medium font-semibold text-slate-900">Monthly Payroll Details</h2>
       <table className="w-full border-separate border-spacing-0 p-3 text-left">
        <thead>
            <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">Employee</th>
            <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Department</th>
            <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">Salary</th>
            <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Bonus</th>
            <th className="bg-slate-100 px-3 py-2 text-base   text-slate-600">Deduction</th>
            <th className="bg-slate-100 px-3 py-2 text-base  text-slate-600">Action</th>
        </thead>
         <tbody className="text-small text-left text-slate-900">
            <tr className="border-b  border-slate-200">
            <td className="px-3  font-small">
                Djalel
            </td>
            <td className="px-3">
                NTIC
            </td>
            <td className="px-3 ">
                8000
            </td>
            <td className="px-3 font-medium text-emerald-600">
                200
            </td>
            <td className="px-3 font-medium text-rose-600">
                400
            </td>
            <td className="px-3 py-1">
                <button className="rounded-xl border border-slate-200 bg-green-100 p-3 text-green-600 transition hover:bg-green-200"><Edit size={18}/></button>
            </td>
            </tr>
            
         </tbody>
       </table>
    </div>
    </>
}
