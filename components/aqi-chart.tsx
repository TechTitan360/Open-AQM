"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  { time: "00:00", aqi: 35 },
  { time: "02:00", aqi: 32 },
  { time: "04:00", aqi: 30 },
  { time: "06:00", aqi: 34 },
  { time: "08:00", aqi: 45 },
  { time: "10:00", aqi: 58 },
  { time: "12:00", aqi: 62 },
  { time: "14:00", aqi: 55 },
  { time: "16:00", aqi: 50 },
  { time: "18:00", aqi: 42 },
  { time: "20:00", aqi: 40 },
  { time: "22:00", aqi: 38 },
]

export function AqiChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[0, "dataMax + 20"]}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Time:</div>
                      <div>{data.time}</div>
                      <div className="font-medium">AQI:</div>
                      <div>{data.aqi}</div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#4f46e5"
            strokeWidth={2}
            activeDot={{ r: 6, style: { fill: "#4f46e5" } }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
