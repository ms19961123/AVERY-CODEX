"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { freeBlocks } from "@/data/mock-data";
import { FreeBlockCard } from "@/components/cards/free-block-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { useAppState } from "@/components/providers/app-state-provider";

export default function FreeTimePage() {
  const { state, setProtectedDowntimeEnabled } = useAppState();
  const [typeFilter, setTypeFilter] = useState<"all" | "usable" | "recovery">("all");

  const filtered = freeBlocks.filter((block) => typeFilter === "all" || block.type === typeFilter);

  return (
    <AppShell>
      <PageHeader title="Free Time" subtitle="Open windows that protect calm, connection, and recovery." />
      <Card className="mb-5 border-sage/30 bg-cream">
        <CardContent className="p-5">
          <CardTitle className="mb-2 text-base">A little breathing room is a good thing.</CardTitle>
          <p className="text-sm text-slate">Not every free block needs a plan. Protecting downtime helps everyone reset.</p>
        </CardContent>
      </Card>

      <div className="mb-4 flex flex-wrap gap-2">
        <Chip active={typeFilter === "all"} onClick={() => setTypeFilter("all")}>All blocks</Chip>
        <Chip active={typeFilter === "usable"} onClick={() => setTypeFilter("usable")}>Usable open time</Chip>
        <Chip active={typeFilter === "recovery"} onClick={() => setTypeFilter("recovery")}>Recovery time</Chip>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((block) => <FreeBlockCard key={block.id} block={block} childName={state.children.find((c) => c.id === block.childId)?.name} />)}
      </div>

      <Card className="mt-6">
        <CardContent className="space-y-3 p-5">
          <CardTitle className="text-base">Protected Downtime Controls</CardTitle>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">
            Keep downtime protected
            <input type="checkbox" checked={state.protectedDowntimeEnabled} onChange={(e) => setProtectedDowntimeEnabled(e.target.checked)} />
          </label>
          <p className="text-sm text-slate">{state.protectedDowntimeEnabled ? "Downtime is currently blocked from suggestions and extra commitments." : "Downtime protection is off. Suggestions may use all open windows."}</p>
        </CardContent>
      </Card>
    </AppShell>
  );
}
