import { Bell, HeartHandshake } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate/10 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-navy p-2 text-white">
            <HeartHandshake className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Family Flow</p>
            <p className="text-xs text-slate">Organize the chaos. Protect what matters.</p>
          </div>
        </div>
        <button className="rounded-xl border border-slate/10 bg-white p-2 text-slate hover:text-navy">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
