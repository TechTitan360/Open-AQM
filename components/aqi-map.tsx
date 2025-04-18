"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Layers, MapPin, ZoomIn, ZoomOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function AqiMap() {
  const [zoom, setZoom] = useState(1)

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-background"
          onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-background"
          onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-background">
              <Layers className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Standard</DropdownMenuItem>
            <DropdownMenuItem>Satellite</DropdownMenuItem>
            <DropdownMenuItem>Terrain</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="absolute left-3 top-3 z-10">
        <Card className="p-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span>Good (0-50)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span>Moderate (51-100)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <span>Unhealthy (101-150)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span>Very Unhealthy (151+)</span>
          </div>
        </Card>
      </div>

      <div
        className="relative h-full w-full"
        style={{ transform: `scale(${zoom})`, transition: "transform 0.3s ease" }}
      >
        <Image src="/placeholder.svg?height=800&width=1200" alt="AQI Map" fill className="object-cover" />

        {/* Map Pins */}
        <div className="absolute left-[30%] top-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="mt-1 rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm">AQI: 42</div>
          </div>
        </div>

        <div className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="mt-1 rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm">AQI: 78</div>
          </div>
        </div>

        <div className="absolute left-[70%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="mt-1 rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm">AQI: 102</div>
          </div>
        </div>
      </div>
    </div>
  )
}
