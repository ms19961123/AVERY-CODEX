"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAppState } from "@/components/providers/app-state-provider";

export default function SettingsPage() {
  const { state, setProtectedDowntimeEnabled } = useAppState();
  const [style, setStyle] = useState(state.onboarding.planningStyle);

  return (
    <AppShell>
      <PageHeader title="Settings & Account" subtitle="Manage family preferences, planning defaults, and account profile." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="space-y-4 p-5">
            <CardTitle className="text-base">Account summary</CardTitle>
            <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate">
              <p className="font-medium text-navy">{state.onboarding.parentName}</p>
              <p>{state.onboarding.familyName}</p>
            </div>
            <label className="block text-sm text-slate">Planning style
              <select value={style} onChange={(e) => setStyle(e.target.value as typeof style)} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2">
                <option value="balanced">Balanced</option>
                <option value="lightly structured">Lightly structured</option>
                <option value="growth-focused">Growth-focused</option>
              </select>
            </label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Protected downtime
              <input type="checkbox" checked={state.protectedDowntimeEnabled} onChange={(e) => setProtectedDowntimeEnabled(e.target.checked)} />
            </label>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-5">
            <CardTitle className="text-base">Notifications & preferences</CardTitle>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Conflict alerts <input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Downtime reminders <input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Weekly recap digest <input type="checkbox" defaultChecked /></label>
            <div className="rounded-2xl border border-slate/10 bg-cream p-4 text-sm text-slate">
              <p className="font-medium text-navy">Phase 2 profile</p>
              <p className="mt-1">Favorites: {state.favoriteSuggestions.length} · Try this week: {state.tryThisWeekSuggestions.length}.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
