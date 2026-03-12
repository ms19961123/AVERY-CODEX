import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { children, events } from "@/data/mock-data";
import { ChildCard } from "@/components/cards/child-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ChildrenPage() {
  return (
    <AppShell>
      <PageHeader title="Children" subtitle="Profiles, interests, and load patterns to guide thoughtful planning." />
      <div className="grid gap-4 lg:grid-cols-3">
        {children.map((child) => (
          <div key={child.id} className="space-y-4">
            <ChildCard child={child} />
            <Card>
              <CardContent className="p-5">
                <CardTitle className="mb-3 text-base">Mini schedule summary</CardTitle>
                <div className="space-y-2 text-sm text-slate">
                  {events.filter((event) => event.childId === child.id).map((event) => (
                    <div key={event.id} className="rounded-xl bg-slate-50 p-2">{event.day} • {event.title} ({event.start})</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
