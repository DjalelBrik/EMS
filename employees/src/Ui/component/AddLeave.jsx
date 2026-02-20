import { useContext, useRef } from "react"
import { LeaveContext } from "../../context/LeaveContext"
export default function AddLeave({HideAdd}){
  
    const {request,setrequest}=useContext(LeaveContext);
    const name=useRef("");
    const type=useRef("");
    const startdate=useRef("");
    const nbdays=useRef(0);
    const reason=useRef("");
    const dep=useRef("");

    function HnadleSubmit(e){
     e.preventDefault();

    const start = new Date(startdate.current.value);
     const days = Number(nbdays.current.value || 0);
      const expected = new Date(start);
      expected.setDate(expected.getDate() + days);

       const expreturn= expected.toISOString().split("T")[0];

     const Request={
      id:Date.now(),
      name:name.current.value,
      type:type.current.value,
      startdate:startdate.current.value,
      nbdays:nbdays.current.value,
      reason:reason.current.value,
      expected:expreturn,
      returndate:null
     }
     setrequest((prev)=>[...prev,Request]);
     HideAdd();
    }
    return<>
       <div className="mx-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-cyan-200/70 bg-white p-6 shadow-lg">
      <h2 className="mb-1 text-2xl font-semibold text-slate-900">Add Leave request</h2>
      <form className="space-y-4" onSubmit={HnadleSubmit}>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Employee Name</label>
          <input
          ref={name}
            type="text"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Select type of leave</label>
          <input
          ref={type}
            type="text"
            className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
          />
        </div>
         <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
         <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Start Date</label>
            <input
            ref={startdate}
              type="date"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
           <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">number of Days</label>
            <input
             ref={nbdays}
              type="number"
              className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
          </div>
        
          <div className="grid gap-1.5">
            <label className="text-sm font-medium text-slate-700">Reason</label>
            <input
            ref={reason}
              type="text"
              className="h-28 rounded-xl border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
         
        <div className="flex items-center gap-3 pt-2">
          <button 
           type="submit"
           className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Add
          </button>
          <button
          type="button"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
           onClick={HideAdd} >
            Cancel
          </button>
        </div>
      </form>
    </div>

    </>
}