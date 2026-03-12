"use client";

import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/page-header";
import { suggestions } from "@/data/mock-data";
import { SuggestionCard } from "@/components/cards/suggestion-card";
import { useAppState } from "@/components/providers/app-state-provider";
import { Button } from "@/components/ui/button";

export default function SuggestionsPage() {
  const { state, toggleFavoriteSuggestion, toggleTryThisWeekSuggestion } = useAppState();

  return (
    <AppShell>
      <PageHeader title="Suggestions" subtitle="Save, favorite, and queue ideas that realistically fit your week." />
      <div className="mb-4 rounded-2xl border border-slate/10 bg-white p-4 text-sm text-slate">
        Favorites: {state.favoriteSuggestions.length} · Try this week: {state.tryThisWeekSuggestions.length}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {suggestions.map((suggestion) => {
          const favorite = state.favoriteSuggestions.includes(suggestion.id);
          const queued = state.tryThisWeekSuggestions.includes(suggestion.id);
          return (
            <div key={suggestion.id} className="space-y-2">
              <SuggestionCard suggestion={suggestion} />
              <div className="flex gap-2">
                <Button size="sm" variant={favorite ? "default" : "secondary"} onClick={() => toggleFavoriteSuggestion(suggestion.id)}>{favorite ? "Favorited" : "Favorite"}</Button>
                <Button size="sm" variant={queued ? "default" : "secondary"} onClick={() => toggleTryThisWeekSuggestion(suggestion.id)}>{queued ? "Queued" : "Try this week"}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
