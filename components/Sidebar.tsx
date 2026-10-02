export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: "▦", active: true },
    { label: "Devices", icon: "▣", active: false },
    { label: "Alerts", icon: "⚠", active: false },
    { label: "Tasks", icon: "✓", active: false },
    { label: "Settings", icon: "⚙", active: false },
  ];

  return (
    <aside className="w-16 lg:w-60 shrink-0 border-r border-slate-800 bg-[#0d1320] flex flex-col">
      <div className="flex items-center gap-3 px-4 py-6 border-b border-slate-800">
        <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
          S
        </div>
        <span className="hidden lg:block font-bold text-white text-lg">Sentra</span>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg mx-2 cursor-pointer transition-colors ${
              item.active
                ? "bg-brand-500/15 text-brand-300"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            <span className="text-lg w-5 text-center shrink-0">{item.icon}</span>
            <span className="hidden lg:block text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm text-white shrink-0">
            JD
          </div>
          <div className="hidden lg:block">
            <p className="text-sm text-white font-medium">Jane Doe</p>
            <p className="text-xs text-slate-500">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
