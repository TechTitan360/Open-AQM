"use client"

import { useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", label: "All Posts" },
  { id: "pollution", label: "Pollution" },
  { id: "awareness", label: "Awareness" },
  { id: "tech", label: "Technology" },
  { id: "solutions", label: "Solutions" },
]

export function CategoryFilter({ activeCategory }: { activeCategory: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(window.location.search)

    if (value === "all") {
      params.delete("category")
    } else {
      params.set("category", value)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Tabs defaultValue={activeCategory} onValueChange={handleCategoryChange}>
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
