"use client"

import { Cloud, Droplets, Thermometer, Wind } from "lucide-react"

export function WeatherInfo() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Cloud className="h-10 w-10 text-blue-500" />
          <div>
            <h3 className="text-2xl font-bold">21°C</h3>
            <p className="text-sm text-muted-foreground">Partly Cloudy</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">New York City</p>
          <p className="text-xs text-muted-foreground">Updated 10 min ago</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-1 rounded-lg border p-3">
          <Thermometer className="h-5 w-5 text-orange-500" />
          <span className="text-xs text-muted-foreground">Feels like</span>
          <span className="font-medium">23°C</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg border p-3">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span className="text-xs text-muted-foreground">Humidity</span>
          <span className="font-medium">65%</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg border p-3">
          <Wind className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-muted-foreground">Wind</span>
          <span className="font-medium">8 km/h</span>
        </div>
      </div>
    </div>
  )
}
