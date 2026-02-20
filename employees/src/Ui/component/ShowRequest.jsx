import { X } from "lucide-react";

export default function Show({setShow,req}) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Request Detail
          </h2>
          <button onClick={() => setShow(false)}>
            <X className="text-slate-600 hover:text-red-500" />
          </button>
        </div>

        <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">

          <div>
            <p className="font-semibold text-slate-500">Full Name</p>
            <p className="text-lg text-black">{req.name}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Type of Request</p>
            <p>{req.type}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Start Date</p>
            <p>{req.startdate}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Number of days</p>
            <p>{req.nbdays}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Expected return date</p>
            <p>{req.expected}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Return Date</p>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {req.returndate}
            </span>
          </div>

          <div>
            <p className="font-semibold text-slate-500">Raison of Leave</p>
            <p >{req.reason}</p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={() => setShow(false)}
            className="rounded-xl bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
