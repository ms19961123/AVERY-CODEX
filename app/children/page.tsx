"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { ChildCard } from "@/components/cards/child-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAppState } from "@/components/providers/app-state-provider";
import { Button } from "@/components/ui/button";

export default function ChildrenPage() {
  const { state, updateChild } = useAppState();
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <AppShell>
      <PageHeader title="Children" subtitle="Editable profiles, interests, and load patterns." />
      <div className="grid gap-4 lg:grid-cols-3">
        {state.children.map((child) => {
          const isEditing = editingId === child.id;
          return (
            <div key={child.id} className="space-y-4">
              <ChildCard child={child} />
              <Card>
                <CardContent className="space-y-3 p-5">
                  <CardTitle className="mb-1 text-base">Profile controls</CardTitle>
                  {isEditing ? (
                    <>
                      <input value={child.name} onChange={(e) => updateChild({ ...child, name: e.target.value })} className="w-full rounded-xl border border-slate/20 px-3 py-2" />
                      <input value={child.grade} onChange={(e) => updateChild({ ...child, grade: e.target.value })} className="w-full rounded-xl border border-slate/20 px-3 py-2" />
                      <input value={child.downtimeStyle} onChange={(e) => updateChild({ ...child, downtimeStyle: e.target.value })} className="w-full rounded-xl border border-slate/20 px-3 py-2" />
                      <Button size="sm" onClick={() => setEditingId(null)}>Done</Button>
                    </>
                  ) : (
                    <Button size="sm" variant="secondary" onClick={() => setEditingId(child.id)}>Edit profile</Button>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <CardTitle className="mb-3 text-base">Mini schedule summary</CardTitle>
                  <div className="space-y-2 text-sm text-slate">
                    {state.events.filter((event) => event.childId === child.id).map((event) => (
                      <div key={event.id} className="rounded-xl bg-slate-50 p-2">{event.day} • {event.title} ({event.start})</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
