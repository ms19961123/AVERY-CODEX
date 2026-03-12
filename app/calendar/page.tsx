"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { children, events } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import { ActivityBadge } from "@/components/activity-badge";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "@/components/empty-state";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarPage() {
  const [childFilter, setChildFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [view, setView] = useState<"week" | "day">("week");
  const [dayView, setDayView] = useState("Mon");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filtered = useMemo(
    () =>
      events.filter(
        (event) =>
          (childFilter === "all" || event.childId === childFilter) &&
          (categoryFilter === "all" || event.category === categoryFilter) &&
          (view === "week" || event.day === dayView)
      ),
    [childFilter, categoryFilter, view, dayView]
  );

  const categories = Array.from(new Set(events.map((event) => event.category)));
  const daySet = view === "week" ? days : [dayView];

  return (
    <AppShell>
      <PageHeader title="Calendar" subtitle="A clean weekly rhythm for school, activities, and downtime." />

      <div className="mb-4 flex flex-wrap gap-2">
        <select
          value={childFilter}
          onChange={(e) => setChildFilter(e.target.value)}
          className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm"
        >
          <option value="all">All children</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>

        <Button variant={view === "week" ? "default" : "secondary"} size="sm" onClick={() => setView("week")}>
          Week
        </Button>
        <Button variant={view === "day" ? "default" : "secondary"} size="sm" onClick={() => setView("day")}>
          Day
        </Button>
        {view === "day" ? (
          <select
            value={dayView}
            onChange={(e) => setDayView(e.target.value)}
            className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm"
          >
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>
        ) : null}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Chip active={categoryFilter === "all"} onClick={() => setCategoryFilter("all")}>All categories</Chip>
        {categories.map((category) => (
          <Chip key={category} active={categoryFilter === category} onClick={() => setCategoryFilter(category)}>
            {category}
          </Chip>
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
                      onClick={() => setSelectedEvent(event)}
                      className="w-full rounded-xl border border-slate/10 bg-slate-50 p-2 text-left transition hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <p className="text-sm font-medium text-navy">{event.title}</p>
                      <p className="text-xs text-slate">
                        {event.start}–{event.end}
                      </p>
                      <ActivityBadge category={event.category} />
                    </button>
                  ))}
                  {dayEvents.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate/20 p-3 text-xs text-slate">
                      Intentional space — no activities scheduled.
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Event details</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate">
            {selectedEvent ? (
              <div className="space-y-2">
                <p className="text-lg font-semibold text-navy">{selectedEvent.title}</p>
                <p>
                  {selectedEvent.day} • {selectedEvent.start}–{selectedEvent.end}
                </p>
                <p>Location: {selectedEvent.location}</p>
                <p>Category: {selectedEvent.category}</p>
                {selectedEvent.childId ? (
                  <p>Child: {children.find((child) => child.id === selectedEvent.childId)?.name}</p>
                ) : null}
              </div>
            ) : (
              <EmptyState
                title="No event selected"
                description="Tap an event card to preview logistics and child assignment details."
              />
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
