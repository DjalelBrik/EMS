import { useState } from "react"
import Table from "../component/table_leave"
import Add from "../component/AddLeave";
export default function Leave(){
    const [add,setadd]=useState(false);
    function ShowAdd(){
        setadd(true);
    }
    function HideAdd(){
        setadd(false);
    }
    return<>
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-emerald-100 p-3 md:ml-72 md:px-5 py-14">
      <section className="mb-8 flex justify-between items-end ">
        <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600/80">
          Leave Request
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Leave Request Overview</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Track leave requests, manage leave balances, and review employee time-off history.
        </p>
        </div>
        
        <button onClick={ShowAdd} className="mb-6 mt-3 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700">Add Request</button>
      </section>

      <section>   
              <Table/>
      </section>
    </main>
    {add && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <Add HideAdd={HideAdd}/>
    </div>)}
    </>
}