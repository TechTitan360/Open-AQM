"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AqiChart } from "@/components/aqi-chart"
import { WeatherInfo } from "@/components/weather-info"
import { AqiMap } from "@/components/aqi-map"
import { Button } from "@/components/ui/button"
import { PlusCircle, MapPin } from "lucide-react"

export function AqiDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current AQI</CardTitle>
            <CardDescription>PM2.5 concentration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-500">42</div>
              <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Good</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">PM10</CardTitle>
            <CardDescription>Particulate matter</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-yellow-500">78</div>
              <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Moderate</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ozone (O₃)</CardTitle>
            <CardDescription>Ground level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-500">0.031</div>
              <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Good</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">NO₂</CardTitle>
            <CardDescription>Nitrogen dioxide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-orange-500">102</div>
              <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">Unhealthy</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Air Quality Trend</CardTitle>
            <CardDescription>24-hour AQI history</CardDescription>
          </CardHeader>
          <CardContent>
            <AqiChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Weather Information</CardTitle>
            <CardDescription>Current conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <WeatherInfo />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="sensors">Nearby Sensors</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="border-none p-0 pt-4">
          <Card>
            <CardContent className="p-4">
              <AqiMap />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sensors" className="border-none p-0 pt-4">
          <Card>
            <CardContent className="p-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Nearby Sensors</h3>
                  <Button variant="outline" size="sm" className="gap-1">
                    <PlusCircle className="h-4 w-4" />
                    Connect Sensor
                  </Button>
                </div>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-3 gap-4 p-4 font-medium">
                    <div>Sensor ID</div>
                    <div>Location</div>
                    <div>Status</div>
                  </div>
                  <div className="border-t">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 border-b p-4 last:border-0">
                        <div>AQM-{1000 + i}</div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span>Downtown</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Active
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
