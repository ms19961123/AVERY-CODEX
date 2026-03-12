import { AppState, Child, Conflict, Event, FreeBlock, OnboardingData, Suggestion } from "@/types";

export const defaultOnboarding: OnboardingData = {
  familyName: "The Parker Family",
  parentName: "Jordan",
  planningStyle: "balanced",
  downtimeGoalHours: 8
};

export const family = {
  name: "The Parker Family",
  parents: ["Jordan Parker", "Riley Parker"],
  planningStyle: "balanced"
};

export const children: Child[] = [
  {
    id: "c1",
    name: "Maya",
    age: 12,
    grade: "7th Grade",
    interests: ["Soccer", "Drawing", "Science podcasts"],
    recurringActivities: ["Soccer practice", "Math tutoring", "Reading club"],
    weeklyLoadHours: 12,
    downtimeStyle: "Solo reading and sketching before bed",
    status: "heavily scheduled"
  },
  {
    id: "c2",
    name: "Leo",
    age: 10,
    grade: "5th Grade",
    interests: ["Piano", "Lego builds", "Bike rides"],
    recurringActivities: ["Piano lesson", "STEM lab", "Swim practice"],
    weeklyLoadHours: 9,
    downtimeStyle: "Quiet music and blanket fort time",
    status: "balanced week"
  },
  {
    id: "c3",
    name: "Ava",
    age: 7,
    grade: "2nd Grade",
    interests: ["Dance", "Nature walks", "Storytelling"],
    recurringActivities: ["Dance class", "School art club"],
    weeklyLoadHours: 6,
    downtimeStyle: "Outdoor play and cuddle storytime",
    status: "room for something new"
  }
];

export const events: Event[] = [
  { id: "e1", title: "School Drop-off", category: "school", day: "Mon", start: "08:00", end: "08:30", location: "Willow Creek School" },
  { id: "e2", title: "Math Tutoring", childId: "c1", category: "tutoring", day: "Mon", start: "16:30", end: "17:30", location: "Learning Hub" },
  { id: "e3", title: "Soccer Practice", childId: "c1", category: "sports", day: "Mon", start: "17:15", end: "18:30", location: "Riverside Field" },
  { id: "e4", title: "Piano Lesson", childId: "c2", category: "music", day: "Tue", start: "16:00", end: "17:00", location: "Harmony Studio" },
  { id: "e5", title: "Pediatrician Appointment", childId: "c3", category: "appointments", day: "Tue", start: "16:30", end: "17:15", location: "Northside Clinic" },
  { id: "e6", title: "Dance Class", childId: "c3", category: "sports", day: "Wed", start: "17:00", end: "18:00", location: "MoveWell Dance" },
  { id: "e7", title: "Family Dinner", category: "family", day: "Wed", start: "18:30", end: "19:30", location: "Home" },
  { id: "e8", title: "STEM Lab", childId: "c2", category: "tutoring", day: "Thu", start: "16:30", end: "18:00", location: "Community Center" },
  { id: "e9", title: "School Pickup", category: "school", day: "Thu", start: "15:00", end: "15:30", location: "Willow Creek School" },
  { id: "e10", title: "Birthday Party", childId: "c3", category: "family", day: "Sat", start: "14:00", end: "16:00", location: "Maple Park" },
  { id: "e11", title: "Swim Practice", childId: "c2", category: "sports", day: "Sat", start: "13:30", end: "15:00", location: "Aqua Center" },
  { id: "e12", title: "Reading Time", category: "personal", day: "Sun", start: "17:00", end: "18:00", location: "Living Room" }
];

export const conflicts: Conflict[] = [
  {
    id: "cf1",
    title: "Maya tutoring overlaps soccer warm-up",
    description: "Travel time from tutoring to field is too tight, causing stress and late arrival.",
    day: "Mon",
    overlap: "4:30 PM–5:30 PM vs 5:15 PM start",
    severity: "high",
    status: "unresolved",
    suggestions: [
      "Move tutoring to Tuesday at 5:30 PM.",
      "Coordinate carpool for soccer so pickup can happen at tutoring.",
      "Ask coach about joining first 15 minutes remotely for strategy review."
    ]
  },
  {
    id: "cf2",
    title: "Leo piano and Ava pediatrician overlap",
    description: "Both need transportation at nearly the same time with one parent available.",
    day: "Tue",
    overlap: "4:00 PM–5:00 PM and 4:30 PM–5:15 PM",
    severity: "medium",
    status: "reviewed",
    suggestions: [
      "Shift pediatrician to 5:30 PM if clinic has availability.",
      "Request virtual piano check-in this week.",
      "Ask grandparent for clinic drop-off support."
    ]
  },
  {
    id: "cf3",
    title: "Saturday swim conflicts with birthday arrival",
    description: "Leo may miss first part of party and create sibling disappointment.",
    day: "Sat",
    overlap: "1:30 PM–3:00 PM and 2:00 PM–4:00 PM",
    severity: "low",
    status: "resolved",
    suggestions: [
      "Leave swim 20 minutes early and pack party clothes in advance.",
      "Send Leo directly with a carpool family.",
      "Skip this week’s swim for social balance."
    ]
  }
];

export const freeBlocks: FreeBlock[] = [
  { id: "fb1", scope: "family", day: "Wed", window: "5:30 PM–7:00 PM", quality: "family window", type: "usable" },
  { id: "fb2", scope: "family", day: "Sat", window: "1:00 PM–4:00 PM", quality: "ideal for outdoor activity", type: "usable" },
  { id: "fb3", scope: "child", childId: "c1", day: "Thu", window: "7:30 PM–8:30 PM", quality: "short reset", type: "recovery" },
  { id: "fb4", scope: "child", childId: "c2", day: "Fri", window: "4:30 PM–6:00 PM", quality: "ideal for creative activity", type: "usable" },
  { id: "fb5", scope: "family", day: "Sun", window: "10:00 AM–12:00 PM", quality: "better left unscheduled", type: "recovery" }
];

export const suggestions: Suggestion[] = [
  {
    id: "s1",
    title: "Backyard sketch & story hour",
    description: "A calm creative session where each child draws a scene and tells a short story.",
    duration: "45 minutes",
    idealWindow: "Friday 4:30 PM–6:00 PM",
    energy: "low",
    tags: ["creative", "calm", "family"],
    fitsBecause: "This uses Leo’s open Friday window and keeps evening energy gentle before the weekend.",
    audience: "family"
  },
  {
    id: "s2",
    title: "Soccer footwork micro-drill",
    description: "Short focused ball-control routine with no pressure and quick wins.",
    duration: "20 minutes",
    idealWindow: "Thursday 7:30 PM",
    energy: "medium",
    tags: ["active", "skills"],
    fitsBecause: "Maya has a short reset slot where low-intensity movement can release school stress.",
    audience: "individual",
    childId: "c1"
  },
  {
    id: "s3",
    title: "Park picnic and bike loop",
    description: "Simple outdoor family time with snacks and unstructured riding.",
    duration: "90 minutes",
    idealWindow: "Saturday 1:00 PM–4:00 PM",
    energy: "medium",
    tags: ["outdoor", "family", "active"],
    fitsBecause: "Saturday has a broad open window and everyone benefits from light movement together.",
    audience: "family"
  },
  {
    id: "s4",
    title: "Do Nothing Night",
    description: "Blanket piles, easy dinner, and no planned tasks.",
    duration: "2 hours",
    idealWindow: "Sunday 10:00 AM–12:00 PM",
    energy: "low",
    tags: ["rest", "recovery", "calm"],
    fitsBecause: "Sunday is tagged as protected downtime and preserving it helps reset the whole family.",
    audience: "family"
  }
];

export const loadByDay = [
  { day: "Mon", load: 8 },
  { day: "Tue", load: 7 },
  { day: "Wed", load: 6 },
  { day: "Thu", load: 9 },
  { day: "Fri", load: 4 },
  { day: "Sat", load: 7 },
  { day: "Sun", load: 3 }
];

export const weeklyBalance = [
  { name: "Structured", value: 56 },
  { name: "Family", value: 27 },
  { name: "Downtime", value: 17 }
];

export const initialAppState: AppState = {
  onboardingCompleted: false,
  onboarding: defaultOnboarding,
  events,
  children,
  conflicts,
  favoriteSuggestions: [],
  tryThisWeekSuggestions: [],
  protectedDowntimeEnabled: true
};
