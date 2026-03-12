import { Badge } from "@/components/ui/badge";
import { categoryStyles } from "@/lib/activity";
import { ActivityCategory } from "@/types";

export function ActivityBadge({ category }: { category: ActivityCategory }) {
  return <Badge className={categoryStyles[category]}>{category}</Badge>;
}
