"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  CalendarDays,
  Clock3,
  Home,
  ListChecks,
  SlidersHorizontal,
  Sparkles,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/conflicts", label: "Conflicts", icon: AlertTriangle },
  { href: "/free-time", label: "Free Time", icon: Clock3 },
  { href: "/suggestions", label: "Suggestions", icon: Sparkles },
  { href: "/children", label: "Children", icon: Users },
  { href: "/weekly-plan", label: "Weekly Plan", icon: ListChecks },
  { href: "/settings", label: "Settings", icon: SlidersHorizontal }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 flex-col rounded-2xl border border-slate/10 bg-white p-4 shadow-soft lg:flex">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-slate">Family Flow</p>
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                  active ? "bg-navy text-white" : "text-slate hover:bg-slate-100"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav className="sticky bottom-3 z-40 mt-5 flex w-full gap-2 overflow-x-auto rounded-2xl border border-slate/10 bg-white/95 p-2 shadow-soft backdrop-blur lg:hidden">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium",
                active ? "bg-navy text-white" : "text-slate"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
