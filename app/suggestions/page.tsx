import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { suggestions } from "@/data/mock-data";
import { SuggestionCard } from "@/components/cards/suggestion-card";

export default function SuggestionsPage() {
  return (
    <AppShell>
      <PageHeader title="Suggestions" subtitle="Balanced activity ideas that fit your real family capacity." />
      <div className="grid gap-4 lg:grid-cols-2">
        {suggestions.map((suggestion) => <SuggestionCard key={suggestion.id} suggestion={suggestion} />)}
      </div>
    </AppShell>
  );
}
