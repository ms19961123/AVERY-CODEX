"use client";

import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { ConflictCard } from "@/components/cards/conflict-card";
import { StatCard } from "@/components/cards/stat-card";
import { useAppState } from "@/components/providers/app-state-provider";
import { Button } from "@/components/ui/button";

export default function ConflictsPage() {
  const { state, updateConflictStatus } = useAppState();

  return (
    <AppShell>
      <PageHeader title="Conflicts" subtitle="Track conflict status and act on realistic resolutions." />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total conflicts" value={String(state.conflicts.length)} hint="Detected this week" />
        <StatCard label="Unresolved" value={String(state.conflicts.filter((c) => c.status !== "resolved").length)} hint="Prioritize first" />
        <StatCard label="Resolved" value={String(state.conflicts.filter((c) => c.status === "resolved").length)} hint="Great progress" />
      </div>
      <div className="mt-6 space-y-4">
        {state.conflicts.map((conflict) => (
          <div key={conflict.id} className="space-y-2">
            <ConflictCard conflict={conflict} />
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant={conflict.status === "unresolved" ? "default" : "secondary"} onClick={() => updateConflictStatus(conflict.id, "unresolved")}>Unresolved</Button>
              <Button size="sm" variant={conflict.status === "reviewed" ? "default" : "secondary"} onClick={() => updateConflictStatus(conflict.id, "reviewed")}>Reviewed</Button>
              <Button size="sm" variant={conflict.status === "resolved" ? "default" : "secondary"} onClick={() => updateConflictStatus(conflict.id, "resolved")}>Resolved</Button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
