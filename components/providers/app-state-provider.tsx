"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialAppState } from "@/data/mock-data";
import { loadState, saveState } from "@/lib/storage";
import { AppState, Child, Conflict, Event, OnboardingData } from "@/types";

type AppStateContextType = {
  state: AppState;
  finishOnboarding: (data: OnboardingData) => void;
  updateChild: (child: Child) => void;
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  updateConflictStatus: (id: string, status: Conflict["status"]) => void;
  toggleFavoriteSuggestion: (id: string) => void;
  toggleTryThisWeekSuggestion: (id: string) => void;
  setProtectedDowntimeEnabled: (enabled: boolean) => void;
};

const AppStateContext = createContext<AppStateContextType | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialAppState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const loaded = loadState();
    if (loaded) setState(loaded);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveState(state);
  }, [state, hydrated]);

  const value = useMemo<AppStateContextType>(
    () => ({
      state,
      finishOnboarding: (data) =>
        setState((prev) => ({ ...prev, onboardingCompleted: true, onboarding: data })),
      updateChild: (child) =>
        setState((prev) => ({ ...prev, children: prev.children.map((c) => (c.id === child.id ? child : c)) })),
      addEvent: (event) => setState((prev) => ({ ...prev, events: [event, ...prev.events] })),
      updateEvent: (event) =>
        setState((prev) => ({ ...prev, events: prev.events.map((e) => (e.id === event.id ? event : e)) })),
      deleteEvent: (id) => setState((prev) => ({ ...prev, events: prev.events.filter((e) => e.id !== id) })),
      updateConflictStatus: (id, status) =>
        setState((prev) => ({
          ...prev,
          conflicts: prev.conflicts.map((conflict) => (conflict.id === id ? { ...conflict, status } : conflict))
        })),
      toggleFavoriteSuggestion: (id) =>
        setState((prev) => ({
          ...prev,
          favoriteSuggestions: prev.favoriteSuggestions.includes(id)
            ? prev.favoriteSuggestions.filter((x) => x !== id)
            : [...prev.favoriteSuggestions, id]
        })),
      toggleTryThisWeekSuggestion: (id) =>
        setState((prev) => ({
          ...prev,
          tryThisWeekSuggestions: prev.tryThisWeekSuggestions.includes(id)
            ? prev.tryThisWeekSuggestions.filter((x) => x !== id)
            : [...prev.tryThisWeekSuggestions, id]
        })),
      setProtectedDowntimeEnabled: (enabled) => setState((prev) => ({ ...prev, protectedDowntimeEnabled: enabled }))
    }),
    [state]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }
  return ctx;
}
