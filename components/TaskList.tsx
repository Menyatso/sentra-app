"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  done: boolean;
};

const initialTasks: Task[] = [
  { id: 1, title: "Update Home Server OS", priority: "high", done: false },
  { id: 2, title: "Review app permissions on iPhone", priority: "medium", done: false },
  { id: 3, title: "Enable 2FA on email account", priority: "high", done: false },
  { id: 4, title: "Backup iPad to iCloud", priority: "low", done: true },
];

const priorityStyles: Record<string, string> = {
  high: "bg-red-500/15 text-red-400",
  medium: "bg-amber-500/15 text-amber-400",
  low: "bg-sky-500/15 text-sky-400",
};

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggle = (id: number) =>
    setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <section className="bg-[#111827] rounded-xl border border-slate-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Tasks</h2>
        <span className="text-xs text-slate-500">{remaining} remaining</span>
      </div>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-3 bg-[#1a2332] rounded-lg border border-slate-800 p-3 hover:border-slate-700 transition-colors"
          >
            <button
              onClick={() => toggle(t.id)}
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                t.done
                  ? "bg-brand-500 border-brand-500"
                  : "border-slate-600 hover:border-brand-400"
              }`}
            >
              {t.done && <span className="text-white text-xs">✓</span>}
            </button>
            <span
              className={`text-sm flex-1 ${
                t.done ? "text-slate-500 line-through" : "text-slate-200"
              }`}
            >
              {t.title}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${priorityStyles[t.priority]}`}
            >
              {t.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
