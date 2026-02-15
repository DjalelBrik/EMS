import { useContext, useEffect,useRef } from "react"
import { EmployeeContext } from "../../context/EmployeeContext"

export default function Modify({empl,setempl,setModify}){
    const {employee,setemployee}=useContext(EmployeeContext);
    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const address=useRef("");
    const job=useRef("");
    const salary=useRef(0);
    const joindate=useRef("");
    const manager=useRef("");
    const depname=useRef("");
    useEffect(()=>
     {
        if(empl){
            name.current.value=empl.name;
            email.current.value=empl.email;
            job.current.value=empl.jobTitle;
            phone.current.value=empl.phone;
            address.current.value=empl.phone;
            depname.current.value=empl.depname;
            salary.current.value=empl.salary;
            joindate.current.value=empl.joindate;
            manager.current.value=empl.manager;
        }
     },[empl])
    function Modify(e) {
     e.preventDefault();

  const updatedEmployee = {
    ...empl,
    name: name.current.value,
    email: email.current.value,
    phone: phone.current.value,
    address: address.current.value,
    jobTitle: job.current.value,
    depname: depname.current.value,
    salary: salary.current.value,
    joindate: joindate.current.value,
    manager: manager.current.value,
  };

  setemployee(prev =>
    prev.map(emp =>
      emp.id === empl.id ? updatedEmployee : emp
    )
  );

  setModify(false);
}

    return<>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-emerald-200/70 bg-white p-6 shadow-lg">
            <h2 className="mb-1 text-2xl font-semibold text-slate-900">Modify Employee</h2>
            <p className="mb-6 text-sm text-slate-600">Update employee information below.</p>

            <form className="space-y-4" >
              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Full name</label>
                <input
                  name="name"
                  type="text"
                  ref={name}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  ref={email}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>

              <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    ref={phone}
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Address</label>
                  <input
                    name="address"
                    ref={address}
                    type="text"
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
              </div>

              <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Job Title</label>
                  <input
                    name="jobTitle"
                    ref={job}
                    type="text"
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Department name</label>
                  <input
                    name="depname"
                    ref={depname}
                    type="text"
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
              </div>

              <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Salary</label>
                  <input
                    name="salary"
                    ref={salary}
                    type="number"
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Join Date</label>
                  <input
                    name="joindate"
                    type="date"
                    ref={joindate}
                    className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Manager Name</label>
                <input
                  name="manager"
                  type="text"
                  ref={manager}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                   onClick={Modify}>
                  Modify
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                 onClick={()=>setModify(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
}