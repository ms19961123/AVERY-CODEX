export type ActivityCategory =
  | "school"
  | "sports"
  | "music"
  | "tutoring"
  | "family"
  | "appointments"
  | "personal";

export type Event = {
  id: string;
  title: string;
  childId?: string;
  category: ActivityCategory;
  day: string;
  start: string;
  end: string;
  location: string;
  note?: string;
};

export type Child = {
  id: string;
  name: string;
  age: number;
  grade: string;
  interests: string[];
  recurringActivities: string[];
  weeklyLoadHours: number;
  downtimeStyle: string;
  status: "heavily scheduled" | "balanced week" | "room for something new";
};

export type Conflict = {
  id: string;
  title: string;
  description: string;
  day: string;
  overlap: string;
  severity: "high" | "medium" | "low";
  suggestions: string[];
  status?: "unresolved" | "reviewed" | "resolved";
};

export type FreeBlock = {
  id: string;
  scope: "family" | "child";
  childId?: string;
  day: string;
  window: string;
  quality:
    | "short reset"
    | "family window"
    | "ideal for creative activity"
    | "ideal for outdoor activity"
    | "better left unscheduled";
  type: "usable" | "recovery";
};

export type Suggestion = {
  id: string;
  title: string;
  description: string;
  duration: string;
  idealWindow: string;
  energy: "low" | "medium" | "high";
  tags: string[];
  fitsBecause: string;
  audience: "family" | "individual";
  childId?: string;
};

export type OnboardingData = {
  familyName: string;
  parentName: string;
  planningStyle: "balanced" | "lightly structured" | "growth-focused";
  downtimeGoalHours: number;
};

export type AppState = {
  onboardingCompleted: boolean;
  onboarding: OnboardingData;
  events: Event[];
  children: Child[];
  conflicts: Conflict[];
  favoriteSuggestions: string[];
  tryThisWeekSuggestions: string[];
  protectedDowntimeEnabled: boolean;
};
