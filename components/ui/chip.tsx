import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  active = false,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition",
        active
          ? "border-navy bg-navy text-white"
          : "border-slate/20 bg-white text-slate hover:border-slate/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
