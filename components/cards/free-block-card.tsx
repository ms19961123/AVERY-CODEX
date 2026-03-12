import { FreeBlock } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function FreeBlockCard({ block, childName }: { block: FreeBlock; childName?: string }) {
  return (
    <Card className={block.type === "recovery" ? "border-sage/40 bg-cream" : ""}>
      <CardContent className="space-y-3 p-5">
        <CardTitle className="text-base">{block.day} • {block.window}</CardTitle>
        <p className="text-sm text-slate">{block.scope === "family" ? "Family-wide window" : `${childName ?? "Child"}'s open window`}</p>
        <div className="flex flex-wrap gap-2">
          <Badge className={block.type === "usable" ? "bg-teal/15 text-teal" : "bg-sage/20 text-teal"}>{block.type}</Badge>
          <Badge>{block.quality}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
