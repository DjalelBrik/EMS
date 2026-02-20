import { useContext, useEffect, useRef } from "react";
import { LeaveContext } from "../../context/LeaveContext";

export default function Modify({ req, setModify }) {
  const { setrequest } = useContext(LeaveContext);
  const name = useRef("");
  const type = useRef("");
  const startdate = useRef("");
  const nbdays = useRef(0);
  const dep = useRef("");
  const expected = useRef("");
  const returndate = useRef("");

  function calculateExpectedDate(startValue, daysValue) {
    if (!startValue) return "";

    const start = new Date(startValue);
    if (Number.isNaN(start.getTime())) return "";

    const days = Number(daysValue || 0);
    const calculated = new Date(start);
    calculated.setDate(calculated.getDate() + days);

    return calculated.toISOString().split("T")[0];
  }

  function recalculateExpected() {
    if (!expected.current) return;

    expected.current.value = calculateExpectedDate(
      startdate.current.value,
      nbdays.current.value
    );
  }

  useEffect(() => {
    if (req) {
      name.current.value = req.name;
      type.current.value = req.type;
      startdate.current.value = req.startdate;
      dep.current.value = req.dep;
      nbdays.current.value = req.nbdays;
      expected.current.value =
        req.expected || calculateExpectedDate(req.startdate, req.nbdays);
      returndate.current.value = req.returndate || "";
    }
  }, [req]);

  function handleModify(e) {
    e.preventDefault();

    const updatedRequest = {
      ...req,
      name: name.current.value,
      type: type.current.value,
      startdate: startdate.current.value,
      dep: dep.current.value,
      nbdays: nbdays.current.value,
      expected: expected.current.value ||
        calculateExpectedDate(startdate.current.value, nbdays.current.value),
      returndate: returndate.current.value,
    };

    setrequest((prev) =>
      prev.map((item) => (item.id === req.id ? updatedRequest : item))
    );

    setModify(false);
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-emerald-200/70 bg-white p-6 shadow-lg">
          <h2 className="mb-1 text-2xl font-semibold text-slate-900">Modify Request</h2>
          <p className="mb-6 text-sm text-slate-600">Update Request information below.</p>

          <form className="space-y-4" onSubmit={handleModify}>
            <div className="grid gap-1.5">
              <label className="text-sm font-medium text-slate-700">Name Employee</label>
              <input
                type="text"
                ref={name}
                className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <div className="grid gap-1.5">
              <label className="text-sm font-medium text-slate-700">Dep of Employee</label>
              <input
                type="text"
                ref={dep}
                className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Type of Request</label>
                <input
                  type="text"
                  ref={type}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Start Date</label>
                <input
                  ref={startdate}
                  type="date"
                  onChange={recalculateExpected}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>
            </div>

            <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Number of Days</label>
                <input
                  ref={nbdays}
                  type="number"
                  onChange={recalculateExpected}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-slate-700">Expected Return</label>
                <input
                  ref={expected}
                  type="date"
                  readOnly
                  className="rounded-xl border border-emerald-200 bg-emerald-100/40 px-4 py-2.5 text-sm text-slate-700 outline-none"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label className="text-sm font-medium text-slate-700">Return Date</label>
              <input
                ref={returndate}
                type="date"
                className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Modify
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                onClick={() => setModify(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
