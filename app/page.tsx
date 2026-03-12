"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/cards/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { BalanceChart } from "@/components/charts/balance-chart";
import { LoadChart } from "@/components/charts/load-chart";
import { suggestions, weeklyBalance } from "@/data/mock-data";
import { ActivityBadge } from "@/components/activity-badge";
import { MotionSection } from "@/components/motion-section";
import { useAppState } from "@/components/providers/app-state-provider";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DashboardPage() {
  const { state } = useAppState();
  const loadByDay = days.map((day) => ({ day, load: state.events.filter((event) => event.day === day).length + 2 }));
  const unresolved = state.conflicts.filter((c) => c.status !== "resolved").length;

  return (
    <AppShell>
      <MotionSection>
        <section className="mb-6 rounded-3xl border border-slate/10 bg-gradient-to-br from-white via-cream to-bg p-7 shadow-soft">
          <PageHeader title={`Welcome, ${state.onboarding.parentName || "Parent"}`} subtitle="Organize the chaos. Protect what matters." />
          <p className="max-w-3xl text-slate">
            Next best step: {unresolved > 0 ? "Review unresolved conflicts before Thursday." : "Great progress. Protect your weekend downtime."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/weekly-plan" className={buttonVariants({ variant: "default" })}>Build Weekly Plan</Link>
            <Link href="/conflicts" className={buttonVariants({ variant: "secondary" })}>Review Conflicts</Link>
          </div>
        </section>
      </MotionSection>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total scheduled activities" value={String(state.events.length)} hint="This week" />
        <StatCard label="Unresolved conflicts" value={String(unresolved)} hint="Needs attention" />
        <StatCard label="Open time blocks" value={state.protectedDowntimeEnabled ? "5" : "3"} hint="Room to breathe" />
        <StatCard label="Protected downtime" value={state.protectedDowntimeEnabled ? "On" : "Off"} hint="Family recovery" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader><CardTitle>This Week at a Glance</CardTitle></CardHeader>
          <CardContent><LoadChart data={loadByDay} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Weekly Balance</CardTitle></CardHeader>
          <CardContent><BalanceChart data={weeklyBalance} /></CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Upcoming Events</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {state.events.slice(0, 6).map((event) => (
              <div key={event.id} className="flex items-start justify-between rounded-xl bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-navy">{event.title}</p>
                  <p className="text-sm text-slate">{event.day} {event.start}–{event.end}</p>
                </div>
                <ActivityBadge category={event.category} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Next-Step Guidance</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-slate">
            <p>• Mark reviewed conflicts as resolved after scheduling changes.</p>
            <p>• Save two low-energy suggestions for Sunday recovery.</p>
            <p>• Keep at least one evening block unscheduled this week.</p>
            <Button variant="secondary" size="sm">Add Activity</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Conflict Alerts</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {state.conflicts.map((conflict) => (
              <div key={conflict.id} className="rounded-xl bg-coral/10 p-3 text-sm text-slate">
                <p className="font-medium text-navy">{conflict.title}</p>
                <p>{conflict.overlap} · {conflict.status}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Saved Suggestions</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {suggestions.filter((s) => state.favoriteSuggestions.includes(s.id)).slice(0, 3).map((suggestion) => (
              <div key={suggestion.id} className="rounded-xl bg-sage/15 p-3 text-sm text-slate">
                <p className="font-medium text-navy">{suggestion.title}</p>
                <p>{suggestion.idealWindow}</p>
              </div>
            ))}
            {state.favoriteSuggestions.length === 0 ? <p className="text-sm text-slate">No favorites yet — save a few ideas in Suggestions.</p> : null}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
