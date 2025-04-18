import { AqiPrediction } from "@/components/aqi-prediction"

export default function PredictionPage() {
  return (
    <div className="container py-6">
      <h1 className="mb-6 text-3xl font-bold">AQI Prediction</h1>
      <AqiPrediction />
    </div>
  )
}
