import Sidebar from "@/components/Sidebar";
import DeviceOverview from "@/components/DeviceOverview";
import AIAssistant from "@/components/AIAssistant";
import TaskList from "@/components/TaskList";
import SecurityAlerts from "@/components/SecurityAlerts";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-slate-400 mt-1">
            Monitor your devices, manage tasks, and get AI-assisted security insights.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <DeviceOverview />
            <SecurityAlerts />
            <TaskList />
          </div>
          <div className="lg:col-span-1">
            <AIAssistant />
          </div>
        </div>
      </main>
    </div>
  );
}
