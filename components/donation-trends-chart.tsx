"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", donations: 65 },
  { name: "Feb", donations: 59 },
  { name: "Mar", donations: 80 },
  { name: "Apr", donations: 81 },
  { name: "May", donations: 56 },
  { name: "Jun", donations: 55 },
  { name: "Jul", donations: 40 },
  { name: "Aug", donations: 45 },
  { name: "Sep", donations: 60 },
  { name: "Oct", donations: 70 },
  { name: "Nov", donations: 75 },
  { name: "Dec", donations: 90 },
]

export function DonationTrendsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "none",
            }}
          />
          <Bar dataKey="donations" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
