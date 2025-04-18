import { AqiDashboard } from "@/components/aqi-dashboard"

export default function Home() {
  return (
    <div className="container py-6">
      <h1 className="mb-6 text-3xl font-bold">Air Quality Dashboard</h1>
      <AqiDashboard />
    </div>
  )
}
