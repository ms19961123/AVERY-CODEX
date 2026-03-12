"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import { ActivityBadge } from "@/components/activity-badge";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "@/components/empty-state";
import { useAppState } from "@/components/providers/app-state-provider";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const blankEvent: Event = {
  id: "",
  title: "",
  category: "school",
  day: "Mon",
  start: "16:00",
  end: "17:00",
  location: ""
};

export default function CalendarPage() {
  const { state, addEvent, updateEvent, deleteEvent } = useAppState();
  const [childFilter, setChildFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [view, setView] = useState<"week" | "day">("week");
  const [dayView, setDayView] = useState("Mon");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [draft, setDraft] = useState<Event>(blankEvent);

  const filtered = useMemo(
    () =>
      state.events.filter(
        (event) =>
          (childFilter === "all" || event.childId === childFilter) &&
          (categoryFilter === "all" || event.category === categoryFilter) &&
          (view === "week" || event.day === dayView)
      ),
    [state.events, childFilter, categoryFilter, view, dayView]
  );

  const categories = Array.from(new Set(state.events.map((event) => event.category)));
  const daySet = view === "week" ? days : [dayView];

  const saveDraft = () => {
    if (!draft.title.trim()) return;
    if (draft.id) {
      updateEvent(draft);
      setSelectedEvent(draft);
    } else {
      const next = { ...draft, id: `e${Date.now()}` };
      addEvent(next);
      setSelectedEvent(next);
    }
    setDraft(blankEvent);
  };

  return (
    <AppShell>
      <PageHeader title="Calendar" subtitle="Manage your family week with editable events and clear spacing." />

      <div className="mb-4 flex flex-wrap gap-2">
        <select
          value={childFilter}
          onChange={(e) => setChildFilter(e.target.value)}
          className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm"
        >
          <option value="all">All children</option>
          {state.children.map((child) => (
            <option key={child.id} value={child.id}>{child.name}</option>
          ))}
        </select>

        <Button variant={view === "week" ? "default" : "secondary"} size="sm" onClick={() => setView("week")}>Week</Button>
        <Button variant={view === "day" ? "default" : "secondary"} size="sm" onClick={() => setView("day")}>Day</Button>
        {view === "day" ? (
          <select value={dayView} onChange={(e) => setDayView(e.target.value)} className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm">
            {days.map((day) => <option key={day}>{day}</option>)}
          </select>
        ) : null}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Chip active={categoryFilter === "all"} onClick={() => setCategoryFilter("all")}>All categories</Chip>
        {categories.map((category) => (
          <Chip key={category} active={categoryFilter === category} onClick={() => setCategoryFilter(category)}>{category}</Chip>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {daySet.map((day) => {
            const dayEvents = filtered.filter((event) => event.day === day);
            return (
              <Card key={day}>
                <CardContent className="space-y-2 p-3">
                  <p className="text-sm font-semibold text-navy">{day}</p>
                  {dayEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => {
                        setSelectedEvent(event);
                        setDraft(event);
                      }}
                      className="w-full rounded-xl border border-slate/10 bg-slate-50 p-2 text-left transition hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <p className="text-sm font-medium text-navy">{event.title}</p>
                      <p className="text-xs text-slate">{event.start}–{event.end}</p>
                      <ActivityBadge category={event.category} />
                    </button>
                  ))}
                  {dayEvents.length === 0 ? <div className="rounded-xl border border-dashed border-slate/20 p-3 text-xs text-slate">Intentional space — no activities scheduled.</div> : null}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">Event manager</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-slate">
            <input placeholder="Title" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className="w-full rounded-xl border border-slate/20 px-3 py-2" />
            <div className="grid grid-cols-2 gap-2">
              <select value={draft.day} onChange={(e) => setDraft((d) => ({ ...d, day: e.target.value }))} className="rounded-xl border border-slate/20 px-3 py-2">{days.map((day) => <option key={day}>{day}</option>)}</select>
              <select value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value as Event["category"] }))} className="rounded-xl border border-slate/20 px-3 py-2">{["school","sports","music","tutoring","family","appointments","personal"].map((cat) => <option key={cat}>{cat}</option>)}</select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input value={draft.start} onChange={(e) => setDraft((d) => ({ ...d, start: e.target.value }))} className="rounded-xl border border-slate/20 px-3 py-2" />
              <input value={draft.end} onChange={(e) => setDraft((d) => ({ ...d, end: e.target.value }))} className="rounded-xl border border-slate/20 px-3 py-2" />
            </div>
            <input placeholder="Location" value={draft.location} onChange={(e) => setDraft((d) => ({ ...d, location: e.target.value }))} className="w-full rounded-xl border border-slate/20 px-3 py-2" />
            <select value={draft.childId ?? ""} onChange={(e) => setDraft((d) => ({ ...d, childId: e.target.value || undefined }))} className="w-full rounded-xl border border-slate/20 px-3 py-2">
              <option value="">No child</option>
              {state.children.map((child) => <option key={child.id} value={child.id}>{child.name}</option>)}
            </select>
            <div className="flex gap-2">
              <Button size="sm" onClick={saveDraft}>{draft.id ? "Update" : "Add"} activity</Button>
              {draft.id ? <Button size="sm" variant="secondary" onClick={() => { deleteEvent(draft.id); setDraft(blankEvent); setSelectedEvent(null); }}>Delete</Button> : null}
            </div>
            {!selectedEvent ? <EmptyState title="No event selected" description="Select or create an event to edit it." /> : null}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
