import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { freeBlocks } from "@/data/mock-data";
import { FreeBlockCard } from "@/components/cards/free-block-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function FreeTimePage() {
  return (
    <AppShell>
      <PageHeader title="Free Time" subtitle="Open windows that protect calm, connection, and recovery." />
      <Card className="mb-5 border-sage/30 bg-cream">
        <CardContent className="p-5">
          <CardTitle className="mb-2 text-base">A little breathing room is a good thing.</CardTitle>
          <p className="text-sm text-slate">Not every free block needs a plan. Protecting downtime helps everyone reset.</p>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {freeBlocks.map((block) => <FreeBlockCard key={block.id} block={block} />)}
      </div>
      <Card className="mt-6">
        <CardContent className="p-5">
          <CardTitle className="text-base">Protected Downtime</CardTitle>
          <p className="mt-2 text-sm text-slate">Sunday morning stays intentionally light. Keep this window open for rest, unstructured play, and flexible family pace.</p>
        </CardContent>
      </Card>
    </AppShell>
  );
}
