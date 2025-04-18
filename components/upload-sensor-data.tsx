"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UploadIcon as FileUpload, Upload } from "lucide-react"

export function UploadSensorData() {
  const [uploadMethod, setUploadMethod] = useState("file")
  const [sensorType, setSensorType] = useState("")
  const [location, setLocation] = useState("")

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Sensor Data</CardTitle>
          <CardDescription>Upload air quality sensor data for analysis and integration</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="file" onValueChange={setUploadMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="file">File Upload</TabsTrigger>
              <TabsTrigger value="api">API Integration</TabsTrigger>
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
            </TabsList>

            <TabsContent value="file" className="mt-6 space-y-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="sensor-type">Sensor Type</Label>
                  <Select value={sensorType} onValueChange={setSensorType}>
                    <SelectTrigger id="sensor-type">
                      <SelectValue placeholder="Select sensor type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pm25">PM2.5 Sensor</SelectItem>
                      <SelectItem value="pm10">PM10 Sensor</SelectItem>
                      <SelectItem value="ozone">Ozone Sensor</SelectItem>
                      <SelectItem value="no2">NO₂ Sensor</SelectItem>
                      <SelectItem value="multi">Multi-parameter Sensor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Sensor Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="residential">Residential Area</SelectItem>
                      <SelectItem value="industrial">Industrial Zone</SelectItem>
                      <SelectItem value="suburban">Suburban Area</SelectItem>
                      <SelectItem value="custom">Custom Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="file-upload">Upload Data File</Label>
                  <div className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/20 px-4 py-5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-medium">Drag & drop files here</p>
                      <p className="text-xs text-muted-foreground">Supports CSV, JSON, or XML files up to 10MB</p>
                    </div>
                    <Input id="file-upload" type="file" className="hidden" accept=".csv,.json,.xml" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-6 space-y-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" placeholder="Enter your API key" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="api-endpoint">API Endpoint</Label>
                  <Input id="api-endpoint" type="text" placeholder="https://api.example.com/data" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="data-format">Data Format</Label>
                  <Select>
                    <SelectTrigger id="data-format">
                      <SelectValue placeholder="Select data format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="xml">XML</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="mt-6 space-y-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="sensor-id">Sensor ID</Label>
                  <Input id="sensor-id" type="text" placeholder="Enter sensor ID" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="reading-time">Reading Time</Label>
                  <Input id="reading-time" type="datetime-local" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="pm25">PM2.5 (μg/m³)</Label>
                    <Input id="pm25" type="number" placeholder="0.0" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="pm10">PM10 (μg/m³)</Label>
                    <Input id="pm10" type="number" placeholder="0.0" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="ozone">Ozone (ppm)</Label>
                    <Input id="ozone" type="number" placeholder="0.0" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="no2">NO₂ (ppb)</Label>
                    <Input id="no2" type="number" placeholder="0.0" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Enter any additional information about this reading" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="gap-2">
            <FileUpload className="h-4 w-4" />
            {uploadMethod === "file" ? "Upload Data" : uploadMethod === "api" ? "Connect API" : "Submit Reading"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>History of your recent data uploads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <div className="grid grid-cols-4 gap-4 p-4 font-medium">
              <div>Date</div>
              <div>Sensor ID</div>
              <div>Location</div>
              <div>Status</div>
            </div>
            <div className="border-t">
              {[1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-4 border-b p-4 last:border-0">
                  <div>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</div>
                  <div>AQM-{1000 + i}</div>
                  <div>Downtown</div>
                  <div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Processed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
