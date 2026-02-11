const toneMap = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  purple: "bg-violet-100 text-violet-600",
  orange: "bg-amber-100 text-amber-600",
};

export default function Box({ title, icon, total, color }) {
  return (
    <article className="w-full max-w-[200px] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <p className="text-lg font-medium text-slate-600">{title}</p>
        <span
          className={`grid h-[40px] w-[40px] place-items-center rounded-2xl text-[20px] ${toneMap[color]}`}
        >
          {icon}
        </span>
      </div>
         <h2 className="text-lg font-semibold tracking-tight text-slate-900">
      {title === "Employees" ? total : `$${total}`}
       </h2>

    </article>
  );
}
