const devices = [
  { name: "MacBook Pro", os: "macOS 14.5", status: "secure", threats: 0, lastScan: "2 min ago" },
  { name: "iPhone 15", os: "iOS 17.4", status: "secure", threats: 0, lastScan: "5 min ago" },
  { name: "Home Server", os: "Ubuntu 22.04", status: "warning", threats: 2, lastScan: "1 hr ago" },
  { name: "iPad Air", os: "iPadOS 17.4", status: "secure", threats: 0, lastScan: "3 hr ago" },
];

const statusStyles: Record<string, string> = {
  secure: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  warning: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  danger: "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function DeviceOverview() {
  return (
    <section className="bg-[#111827] rounded-xl border border-slate-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Device Overview</h2>
        <button className="text-xs text-brand-400 hover:text-brand-300">Scan all</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {devices.map((d) => (
          <div
            key={d.name}
            className="bg-[#1a2332] rounded-lg border border-slate-800 p-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-white">{d.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{d.os}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${statusStyles[d.status]}`}
              >
                {d.status === "secure" ? "Secure" : d.status === "warning" ? "Warning" : "At Risk"}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">
                {d.threats > 0 ? `${d.threats} threat${d.threats > 1 ? "s" : ""}` : "No threats"}
              </span>
              <span className="text-slate-600">Scanned {d.lastScan}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
