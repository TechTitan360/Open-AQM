"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Sparkles } from "lucide-react"

export function AqiPrediction() {
  const [location, setLocation] = useState("downtown")
  const [timeframe, setTimeframe] = useState("24h")

  // Sample prediction data
  const predictionData = {
    "24h": [
      { time: "Now", aqi: 42 },
      { time: "+4h", aqi: 48 },
      { time: "+8h", aqi: 55 },
      { time: "+12h", aqi: 62 },
      { time: "+16h", aqi: 58 },
      { time: "+20h", aqi: 50 },
      { time: "+24h", aqi: 45 },
    ],
    "7d": [
      { time: "Today", aqi: 42 },
      { time: "Day 2", aqi: 45 },
      { time: "Day 3", aqi: 52 },
      { time: "Day 4", aqi: 58 },
      { time: "Day 5", aqi: 60 },
      { time: "Day 6", aqi: 55 },
      { time: "Day 7", aqi: 48 },
    ],
  }

  // Sample contributing factors data
  const factorsData = [
    { name: "Traffic", value: 35 },
    { name: "Industry", value: 25 },
    { name: "Weather", value: 20 },
    { name: "Construction", value: 15 },
    { name: "Other", value: 5 },
  ]

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AQI Prediction Settings</CardTitle>
          <CardDescription>Select location and timeframe for prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="residential">Residential Area</SelectItem>
                  <SelectItem value="industrial">Industrial Zone</SelectItem>
                  <SelectItem value="suburban">Suburban Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="timeframe" className="text-sm font-medium">
                Prediction Timeframe
              </label>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Next 24 Hours</SelectItem>
                  <SelectItem value="7d">Next 7 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Prediction
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AQI Prediction</CardTitle>
            <CardDescription>
              {timeframe === "24h" ? "Next 24 hours" : "Next 7 days"} prediction for{" "}
              {location.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={predictionData[timeframe]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" />
                  <YAxis domain={[0, "dataMax + 20"]} />
                  <CartesianGrid strokeDasharray="3 3" />
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
                  <Area type="monotone" dataKey="aqi" stroke="#4f46e5" fillOpacity={1} fill="url(#colorAqi)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contributing Factors</CardTitle>
            <CardDescription>Estimated impact on air quality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={factorsData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={80} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="font-medium">Factor:</div>
                              <div>{data.name}</div>
                              <div className="font-medium">Impact:</div>
                              <div>{data.value}%</div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar dataKey="value" fill="#4f46e5" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Insights</CardTitle>
          <CardDescription>Machine learning analysis of air quality trends</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="insights">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="insights">Key Insights</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="mt-4 space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">Trend Analysis</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our AI model has detected a cyclical pattern in air quality, with peaks during morning and evening
                  rush hours. The overall trend shows a 15% improvement compared to last month.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">Anomaly Detection</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  An unusual spike in PM2.5 levels was detected last Tuesday, likely due to the construction activity in
                  the downtown area. This temporary increase is expected to normalize within the next 48 hours.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-4 space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">Health Recommendations</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on the predicted AQI levels, sensitive groups should limit outdoor activities between 4-7 PM
                  tomorrow. Consider using air purifiers indoors during this period.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">Policy Suggestions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Traffic management during peak hours could significantly reduce pollution levels. Our model suggests
                  that a 20% reduction in traffic could lead to a 15% improvement in air quality.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="methodology" className="mt-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">AI Model Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our predictions use a combination of historical AQI data, weather forecasts, traffic patterns, and
                  seasonal trends. The model employs a gradient-boosted decision tree algorithm with a 24-hour rolling
                  window for short-term predictions and a time-series LSTM neural network for longer-term forecasts.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Model accuracy: 87% for 24-hour predictions, 76% for 7-day predictions (evaluated using RMSE and MAE
                  metrics).
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
