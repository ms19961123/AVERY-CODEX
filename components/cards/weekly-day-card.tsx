import { Event } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WeeklyDayCard({ day, events, note }: { day: string; events: Event[]; note: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{day}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.length === 0 ? <p className="text-sm text-slate">Light day — keep this breathing room.</p> : null}
        {events.map((event) => (
          <div key={event.id} className="rounded-xl border border-slate/10 bg-slate-50 p-3 text-sm text-slate">
            <p className="font-medium text-navy">{event.title}</p>
            <p>{event.start}–{event.end}</p>
          </div>
        ))}
        <p className="rounded-xl bg-cream p-3 text-sm text-slate">{note}</p>
      </CardContent>
    </Card>
  );
}
