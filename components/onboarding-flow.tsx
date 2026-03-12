"use client";

import { useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OnboardingFlow() {
  const { state, finishOnboarding } = useAppState();
  const [step, setStep] = useState(1);
  const [familyName, setFamilyName] = useState(state.onboarding.familyName);
  const [parentName, setParentName] = useState(state.onboarding.parentName);
  const [planningStyle, setPlanningStyle] = useState(state.onboarding.planningStyle);
  const [downtimeGoalHours, setDowntimeGoalHours] = useState(state.onboarding.downtimeGoalHours);

  if (state.onboardingCompleted) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/30 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-xl">
        <CardContent className="space-y-4 p-6">
          <CardTitle>Welcome to Family Flow</CardTitle>
          <p className="text-sm text-slate">Step {step} of 3</p>

          {step === 1 ? (
            <label className="block text-sm text-slate">Family name
              <input value={familyName} onChange={(e) => setFamilyName(e.target.value)} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2" />
            </label>
          ) : null}

          {step === 2 ? (
            <>
              <label className="block text-sm text-slate">Primary parent first name
                <input value={parentName} onChange={(e) => setParentName(e.target.value)} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2" />
              </label>
              <label className="block text-sm text-slate">Planning style
                <select value={planningStyle} onChange={(e) => setPlanningStyle(e.target.value as typeof planningStyle)} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2">
                  <option value="balanced">Balanced</option>
                  <option value="lightly structured">Lightly structured</option>
                  <option value="growth-focused">Growth-focused</option>
                </select>
              </label>
            </>
          ) : null}

          {step === 3 ? (
            <label className="block text-sm text-slate">Weekly downtime goal (hours)
              <input type="number" min={2} max={30} value={downtimeGoalHours} onChange={(e) => setDowntimeGoalHours(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-slate/20 px-3 py-2" />
            </label>
          ) : null}

          <div className="flex justify-between pt-2">
            <Button variant="ghost" disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))}>Back</Button>
            {step < 3 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
            ) : (
              <Button
                onClick={() =>
                  finishOnboarding({ familyName, parentName, planningStyle, downtimeGoalHours })
                }
              >
                Start planning
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
