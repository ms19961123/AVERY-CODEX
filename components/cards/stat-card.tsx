import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card>
      <CardContent className="space-y-2 p-5">
        <p className="text-sm text-slate">{label}</p>
        <p className="text-3xl font-semibold text-navy">{value}</p>
        <Badge className="bg-sage/15 text-teal">{hint}</Badge>
      </CardContent>
    </Card>
  );
}
