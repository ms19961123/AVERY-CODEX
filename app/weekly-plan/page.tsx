"use client";

import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { WeeklyDayCard } from "@/components/cards/weekly-day-card";
import { Card, CardContent } from "@/components/ui/card";
import { useAppState } from "@/components/providers/app-state-provider";

const notes: Record<string, string> = {
  Mon: "Monday is tight after school. Keep dinner simple and prep gear early.",
  Tue: "Transportation overlap needs one adjustment to reduce stress.",
  Wed: "Good family window before dinner — ideal for calm connection.",
  Thu: "Tightest day this week. Consider a lighter evening routine.",
  Fri: "Open creative block available for low-pressure play.",
  Sat: "Keep transitions smooth around party and swim commitments.",
  Sun: "Protect downtime. Recovery helps the whole week feel manageable."
};

export default function WeeklyPlanPage() {
  const { state } = useAppState();

  return (
    <AppShell>
      <PageHeader title="Weekly Plan" subtitle="A calm AI-style plan for logistics, energy, and protected rest." />
      <Card className="mb-6 bg-white">
        <CardContent className="p-6 text-slate">
          {state.onboarding.parentName}, this week is moderately busy. Thursday is your tightest day. Protect at least {state.onboarding.downtimeGoalHours} hours of downtime.
        </CardContent>
      </Card>
      <div className="grid gap-4 lg:grid-cols-2">
        {Object.keys(notes).map((day) => (
          <WeeklyDayCard key={day} day={day} events={state.events.filter((event) => event.day === day)} note={notes[day]} />
        ))}
      </div>
    </AppShell>
  );
}
