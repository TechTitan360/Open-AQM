"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Check, Download, Filter, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState("sensors")

  return (
    <div className="grid gap-6">
      <Tabs defaultValue="sensors" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sensors">Sensors</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="sensors" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Sensor Management</CardTitle>
                  <CardDescription>Manage and monitor all connected sensors</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Sensor
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Search sensors..." />
                  <Button type="submit" size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border">
                <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                  <div>Sensor ID</div>
                  <div>Type</div>
                  <div>Location</div>
                  <div>Last Update</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="border-t">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid grid-cols-6 gap-4 border-b p-4 last:border-0">
                      <div>AQM-{1000 + i}</div>
                      <div>{i % 2 === 0 ? "PM2.5" : "Multi-parameter"}</div>
                      <div>{i % 3 === 0 ? "Downtown" : i % 3 === 1 ? "Residential" : "Industrial"}</div>
                      <div>{new Date(Date.now() - i * 3600000).toLocaleTimeString()}</div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            i % 3 === 0
                              ? "bg-green-100 text-green-800"
                              : i % 3 === 1
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {i % 3 === 0 ? "Active" : i % 3 === 1 ? "Maintenance" : "Offline"}
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Sensor</DropdownMenuItem>
                            <DropdownMenuItem>View Data</DropdownMenuItem>
                            <DropdownMenuItem>Calibrate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts and permissions</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Search users..." />
                  <Button type="submit" size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border">
                <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Role</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="border-t">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 border-b p-4 last:border-0">
                      <div>{["John Doe", "Jane Smith", "Alex Johnson", "Sam Rivera"][i - 1]}</div>
                      <div>{`user${i}@example.com`}</div>
                      <div>{i === 1 ? "Admin" : i === 2 ? "Moderator" : "User"}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Switch id={`user-status-${i}`} defaultChecked={i !== 3} />
                          <Label htmlFor={`user-status-${i}`}>{i !== 3 ? "Active" : "Inactive"}</Label>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuItem>Reset Password</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage community posts and comments</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Search content..." />
                  <Button type="submit" size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Content</SelectItem>
                      <SelectItem value="posts">Posts</SelectItem>
                      <SelectItem value="comments">Comments</SelectItem>
                      <SelectItem value="flagged">Flagged</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-lg border">
                <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                  <div>Title</div>
                  <div>Author</div>
                  <div>Type</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="border-t">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 border-b p-4 last:border-0">
                      <div className="truncate">
                        {
                          [
                            "Air Quality Concerns in Downtown Area",
                            "New Community Air Quality Sensor Installation",
                            "Air Quality Improvement Initiatives",
                            "Response to recent pollution spike",
                            "Weekly air quality report",
                          ][i - 1]
                        }
                      </div>
                      <div>{["Alex Johnson", "Sam Rivera", "Taylor Kim", "Jamie Lee", "Pat Morgan"][i - 1]}</div>
                      <div>{i % 2 === 0 ? "Comment" : "Post"}</div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            i % 4 === 0
                              ? "bg-red-100 text-red-800"
                              : i % 4 === 1
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {i % 4 === 0 ? "Flagged" : i % 4 === 1 ? "Pending" : "Approved"}
                        </span>
                      </div>
                      <div className="flex justify-end gap-2">
                        {i % 4 === 1 && (
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" size="icon" className="h-8 w-8 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Pin to Top</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
