"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, Menu, MessageSquare, Settings, Upload, Users, Wind } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"

export function MainSidebar() {
  const pathname = usePathname()
  const { openMobile, setOpenMobile, isMobile } = useSidebar()

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      name: "Community Talks",
      path: "/community",
      icon: MessageSquare,
    },
    {
      name: "Upload Sensor Data",
      path: "/upload",
      icon: Upload,
    },
    {
      name: "ML Prediction",
      path: "/prediction",
      icon: BarChart3,
    },
    {
      name: "Admin Panel",
      path: "/admin",
      icon: Settings,
    },
  ]

  const SidebarContent = (
    <div className="flex h-full flex-col gap-4">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Wind className="h-6 w-6" />
          <span>Open AQM</span>
        </Link>
      </div>
      <div className="flex-1 px-4">
        <nav className="flex flex-col gap-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === route.path ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
              onClick={() => isMobile && setOpenMobile(false)}
            >
              <route.icon className="h-4 w-4" />
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Users className="h-4 w-4" />
          Login / Signup
        </Button>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <>
        <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center border-b bg-background px-4">
          <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              {SidebarContent}
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Wind className="h-6 w-6" />
            <span>Open AQM</span>
          </Link>
        </div>
        <div className="h-14" />
      </>
    )
  }

  return <div className="hidden w-64 flex-shrink-0 border-r md:block">{SidebarContent}</div>
}
