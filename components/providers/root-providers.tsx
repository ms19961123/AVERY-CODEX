"use client";

import { AppStateProvider } from "@/components/providers/app-state-provider";
import { OnboardingFlow } from "@/components/onboarding-flow";

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppStateProvider>
      {children}
      <OnboardingFlow />
    </AppStateProvider>
  );
}
