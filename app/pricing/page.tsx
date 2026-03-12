import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Great for trying Family Flow with one week of planning.",
    features: ["Core dashboard", "Calendar basics", "Conflict overview"]
  },
  {
    name: "Family Plus",
    price: "$12/mo",
    description: "Built for active households that want deeper weekly guidance.",
    features: ["Everything in Free", "Advanced free-time controls", "Saved suggestions & queues"]
  },
  {
    name: "Premium",
    price: "$24/mo",
    description: "For families coordinating complex schedules across many activities.",
    features: ["Everything in Family Plus", "Priority planning templates", "Expanded analytics & exports"]
  }
];

export default function PricingPage() {
  return (
    <AppShell>
      <PageHeader title="Pricing" subtitle="Simple plans for every family stage. No real payment flow in this prototype." />
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Card key={plan.name} className={i === 1 ? "border-navy/20" : ""}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-3xl font-semibold text-navy">{plan.price}</p>
              <p className="text-sm text-slate">{plan.description}</p>
              <div className="space-y-1 text-sm text-slate">
                {plan.features.map((feature) => <p key={feature}>• {feature}</p>)}
              </div>
              <Button className="w-full" variant={i === 1 ? "default" : "secondary"}>Choose {plan.name}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
