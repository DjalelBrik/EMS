export default function Box2({ title, total, description, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden w-full max-w-sm">
      
      <div className="px-4 py-4">
        <h2 className="text-lg  text-slate-800">
          {title}
        </h2>
      </div>

      <hr className="border-gray-200" />

      <div className="px-6 py-6 space-y-2">
        <h3 className={`text-3xl font-sans font-medium ${color}`}>
          {total}
        </h3>

        <p className="text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
