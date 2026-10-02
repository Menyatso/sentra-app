const alerts = [
  {
    severity: "high",
    title: "Outdated SSL certificate on Home Server",
    description: "Certificate expires in 3 days. Renew to maintain secure connections.",
    time: "1h ago",
  },
  {
    severity: "medium",
    title: "Weak password detected on iPad Air",
    description: "Email account password has not been updated in 180 days.",
    time: "4h ago",
  },
  {
    severity: "low",
    title: "New device connected to network",
    description: "An unrecognized device joined your Wi-Fi. Verify it's yours.",
    time: "6h ago",
  },
];

const severityStyles: Record<string, { dot: string; label: string }> = {
  high: { dot: "bg-red-500", label: "text-red-400" },
  medium: { dot: "bg-amber-500", label: "text-amber-400" },
  low: { dot: "bg-sky-500", label: "text-sky-400" },
};

export default function SecurityAlerts() {
  return (
    <section className="bg-[#111827] rounded-xl border border-slate-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Security Alerts</h2>
        <span className="text-xs text-slate-500">{alerts.length} active</span>
      </div>

      <div className="space-y-3">
        {alerts.map((a, i) => {
          const s = severityStyles[a.severity];
          return (
            <div
              key={i}
              className="flex gap-3 bg-[#1a2332] rounded-lg border border-slate-800 p-3.5"
            >
              <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${s.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-white">{a.title}</p>
                  <span className={`text-xs shrink-0 ${s.label}`}>{a.time}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
