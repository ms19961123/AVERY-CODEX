import { Child } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ChildCard({ child }: { child: Child }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{child.name}</CardTitle>
        <CardDescription>
          {child.age} • {child.grade}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Badge className="bg-navy/10 text-navy">{child.status}</Badge>
        <p className="text-sm text-slate">Weekly load: {child.weeklyLoadHours}h</p>
        <p className="text-sm text-slate">Downtime: {child.downtimeStyle}</p>
        <div className="flex flex-wrap gap-2">
          {child.interests.map((interest) => (
            <Badge key={interest}>{interest}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
