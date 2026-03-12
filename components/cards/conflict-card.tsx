import { Conflict } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const severityClasses: Record<Conflict["severity"], string> = {
  high: "bg-coral/20 text-coral",
  medium: "bg-amber/25 text-amber",
  low: "bg-sage/20 text-teal"
};

export function ConflictCard({ conflict }: { conflict: Conflict }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-base">{conflict.title}</CardTitle>
          <Badge className={severityClasses[conflict.severity]}>{conflict.severity} severity</Badge>
        </div>
        <CardDescription>
          {conflict.day} • {conflict.overlap}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate">{conflict.description}</p>
        <div className="space-y-2 rounded-2xl bg-slate-50 p-3">
          {conflict.suggestions.map((suggestion) => (
            <p key={suggestion} className="text-sm text-slate">
              • {suggestion}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
