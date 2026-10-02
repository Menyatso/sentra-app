"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Scan my home server for vulnerabilities",
  "What should I do about the SSL alert?",
  "Summarize my security status",
];

const cannedResponses: Record<string, string> = {
  "Scan my home server for vulnerabilities":
    "I've initiated a scan on your Home Server (Ubuntu 22.04). Two potential issues found:\n\n1. SSL certificate expiring in 3 days\n2. SSH port 22 exposed to all interfaces\n\nWould you like me to walk you through fixing these?",
  "What should I do about the SSL alert?":
    "Your Home Server's SSL certificate expires in 3 days. Here's what to do:\n\n1. Log into your certificate provider\n2. Renew the certificate for your domain\n3. Update the cert files on the server\n4. Restart the web service\n\nWant me to create a task for this?",
  "Summarize my security status":
    "Here's your security summary:\n\n• 4 devices monitored — 3 secure, 1 with warnings\n• 3 active alerts (1 high, 1 medium, 1 low)\n• 3 pending tasks\n\nOverall status: Needs attention. The Home Server requires updates.",
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your Sentra AI assistant. I can help with security scans, alert analysis, and task management. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    const reply: Message = {
      role: "assistant",
      content: cannedResponses[text] || "I understand you want help with that. This is a demo response — connect an AI backend to enable full assistant capabilities.",
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  };

  return (
    <section className="bg-[#111827] rounded-xl border border-slate-800 p-5 flex flex-col h-full min-h-[500px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold">
          AI
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">AI Assistant</h2>
          <p className="text-xs text-slate-500">Powered by Sentra</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-brand-500 text-white"
                  : "bg-[#1a2332] text-slate-200 border border-slate-800"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-xs text-slate-300 bg-[#1a2332] border border-slate-700 rounded-full px-3 py-1.5 hover:border-brand-500 hover:text-brand-300 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Ask about your security..."
          className="flex-1 bg-[#1a2332] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
        />
        <button
          onClick={() => send(input)}
          className="bg-brand-500 hover:bg-brand-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
        >
          Send
        </button>
      </div>
    </section>
  );
}
