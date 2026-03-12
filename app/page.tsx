import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/cards/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { BalanceChart } from "@/components/charts/balance-chart";
import { LoadChart } from "@/components/charts/load-chart";
import {
  children,
  conflicts,
  events,
  freeBlocks,
  loadByDay,
  suggestions,
  weeklyBalance
} from "@/data/mock-data";
import { ActivityBadge } from "@/components/activity-badge";
import { MotionSection } from "@/components/motion-section";

export default function DashboardPage() {
  return (
    <AppShell>
      <MotionSection>
        <section className="mb-6 rounded-3xl border border-slate/10 bg-gradient-to-br from-white via-cream to-bg p-7 shadow-soft">
          <PageHeader title="Family Flow" subtitle="Organize the chaos. Protect what matters." />
          <p className="max-w-3xl text-slate">
            Family Flow gives you a calm view of a busy week, highlights conflicts early, and protects meaningful
            downtime.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/weekly-plan" className={buttonVariants({ variant: "default" })}>Build Weekly Plan</Link>
            <Link href="/conflicts" className={buttonVariants({ variant: "secondary" })}>Review Conflicts</Link>
          </div>
        </section>
      </MotionSection>

      <MotionSection delay={0.05}>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Total scheduled activities" value={String(events.length)} hint="This week" />
          <StatCard label="Conflict count" value={String(conflicts.length)} hint="Needs attention" />
          <StatCard label="Open time blocks" value={String(freeBlocks.length)} hint="Room to breathe" />
          <StatCard label="Stress/load level" value="Moderate" hint="Thursday is tight" />
        </div>
      </MotionSection>

      <MotionSection delay={0.1}>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">Add Activity</Button>
          <Link href="/conflicts" className={buttonVariants({ variant: "secondary", size: "sm" })}>Review Conflicts</Link>
          <Link href="/free-time" className={buttonVariants({ variant: "secondary", size: "sm" })}>View Free Time</Link>
          <Link href="/weekly-plan" className={buttonVariants({ variant: "secondary", size: "sm" })}>Build Weekly Plan</Link>
        </div>
      </MotionSection>

      <MotionSection delay={0.12}>
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>This Week at a Glance</CardTitle>
            </CardHeader>
            <CardContent>
              <LoadChart data={loadByDay} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <BalanceChart data={weeklyBalance} />
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-slate">
                {weeklyBalance.map((item) => (
                  <p key={item.name}>
                    {item.name}: {item.value}%
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <MotionSection delay={0.15}>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {events.slice(0, 6).map((event) => (
                <div key={event.id} className="flex items-start justify-between rounded-xl bg-slate-50 p-3">
                  <div>
                    <p className="font-medium text-navy">{event.title}</p>
                    <p className="text-sm text-slate">
                      {event.day} {event.start}–{event.end}
                    </p>
                  </div>
                  <ActivityBadge category={event.category} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {children.map((child) => (
                <div key={child.id} className="rounded-xl border border-slate/10 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-navy">{child.name}</p>
                    <p className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate">{child.status}</p>
                  </div>
                  <p className="mt-1 text-sm text-slate">{child.recurringActivities.join(" • ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <MotionSection delay={0.2}>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Conflict Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {conflicts.map((conflict) => (
                <div key={conflict.id} className="rounded-xl bg-coral/10 p-3 text-sm text-slate">
                  <p className="font-medium text-navy">{conflict.title}</p>
                  <p>{conflict.overlap}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Free-Time Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestions.slice(0, 3).map((suggestion) => (
                <div key={suggestion.id} className="rounded-xl bg-sage/15 p-3 text-sm text-slate">
                  <p className="font-medium text-navy">{suggestion.title}</p>
                  <p>{suggestion.idealWindow}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </MotionSection>
    </AppShell>
  );
}
