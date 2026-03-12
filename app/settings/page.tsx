"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const [style, setStyle] = useState("balanced");

  return (
    <AppShell>
      <PageHeader title="Settings" subtitle="Preferences that keep planning realistic and family-centered." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="space-y-4 p-5">
            <CardTitle className="text-base">Family preferences</CardTitle>
            <label className="block text-sm text-slate">Preferred downtime per week
              <input defaultValue="8 hours" className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2" />
            </label>
            <label className="block text-sm text-slate">Travel buffer preference
              <input defaultValue="20 minutes" className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2" />
            </label>
            <label className="block text-sm text-slate">Planning style
              <select value={style} onChange={(e) => setStyle(e.target.value)} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2">
                <option value="balanced">Balanced</option>
                <option value="lightly structured">Lightly structured</option>
                <option value="growth-focused">Growth-focused</option>
              </select>
            </label>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-5">
            <CardTitle className="text-base">Notifications & goals</CardTitle>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Conflict alerts <input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Downtime reminders <input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">Weekly recap digest <input type="checkbox" defaultChecked /></label>
            <div className="rounded-2xl border border-slate/10 bg-cream p-4 text-sm text-slate">
              <p className="font-medium text-navy">Profile summary</p>
              <p className="mt-1">Current theme: Calm daylight palette. Planning style: {style}.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
