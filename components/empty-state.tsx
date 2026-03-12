import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-dashed border-slate/20 bg-white/70">
      <CardContent className="p-5 text-center">
        <CardTitle className="text-base">{title}</CardTitle>
        <p className="mt-2 text-sm text-slate">{description}</p>
      </CardContent>
    </Card>
  );
}
