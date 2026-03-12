import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { ConflictCard } from "@/components/cards/conflict-card";
import { conflicts } from "@/data/mock-data";
import { StatCard } from "@/components/cards/stat-card";

export default function ConflictsPage() {
  return (
    <AppShell>
      <PageHeader title="Conflicts" subtitle="Supportive resolution ideas for tight moments in your schedule." />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total conflicts" value={String(conflicts.length)} hint="Detected this week" />
        <StatCard label="Severe conflicts" value={String(conflicts.filter((c) => c.severity === "high").length)} hint="Prioritize first" />
        <StatCard label="Resolution options" value={String(conflicts.reduce((acc, c) => acc + c.suggestions.length, 0))} hint="Actionable ideas" />
      </div>
      <div className="mt-6 space-y-4">
        {conflicts.map((conflict) => <ConflictCard key={conflict.id} conflict={conflict} />)}
      </div>
    </AppShell>
  );
}
