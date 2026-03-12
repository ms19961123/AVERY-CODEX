import type { ReactNode } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Topbar } from "@/components/layout/topbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <Topbar />
      <main className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Navigation />
        <div className="min-w-0 flex-1">{children}</div>
      </main>
    </div>
  );
}
