"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export function LoadChart({ data }: { data: { day: string; load: number }[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="load" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3E7E81" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#3E7E81" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" />
          <Tooltip />
          <Area type="monotone" dataKey="load" stroke="#1F3A5F" fillOpacity={1} fill="url(#load)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
