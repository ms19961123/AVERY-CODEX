import { Suggestion } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SuggestionCard({ suggestion }: { suggestion: Suggestion }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{suggestion.title}</CardTitle>
        <CardDescription>{suggestion.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate">
        <p>
          <span className="font-medium text-navy">Duration:</span> {suggestion.duration}
        </p>
        <p>
          <span className="font-medium text-navy">Ideal window:</span> {suggestion.idealWindow}
        </p>
        <p>
          <span className="font-medium text-navy">Why this fits:</span> {suggestion.fitsBecause}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-navy/10 text-navy">{suggestion.energy} energy</Badge>
          {suggestion.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
