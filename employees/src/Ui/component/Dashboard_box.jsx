const tones = {
  blue: {
    card: "border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-blue-100/60",
    badge: "bg-blue-100 text-blue-700 ring-1 ring-blue-200",
    value: "text-blue-900",
  },
  green: {
    card: "border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60",
    badge: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
    value: "text-emerald-900",
  },
  cyan: {
    card: "border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-cyan-100/60",
    badge: "bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200",
    value: "text-cyan-900",
  },
  teal: {
    card: "border-teal-200/80 bg-gradient-to-br from-teal-50 via-white to-teal-100/60",
    badge: "bg-teal-100 text-teal-700 ring-1 ring-teal-200",
    value: "text-teal-900",
  },
};

export default function Box({ text, Icon, number, tone = "blue" }) {
  const style = tones[tone] || tones.blue;

  return (
    <article
      className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${style.card}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{text}</p>
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${style.badge}`}>
          {Icon}
        </div>
      </div>
      <h2 className={`text-3xl font-semibold tracking-tight ${style.value}`}>{number}</h2>
    </article>
  );
}
