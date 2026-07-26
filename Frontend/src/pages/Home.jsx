import StatsCard from "../components/StatsCard";
import SensorForm from "../components/SensorForm";
import AIResult from "../components/AIResult";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ai-water-leakage-detection.onrender.com",
        data,
      );

      if (!response.data.success) {
        throw new Error("AI analysis failed");
      }

      setAiResult(JSON.parse(response.data.result));
    } catch (error) {
      console.error(error);
      alert("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}

      <div className="mb-10">
        <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
          Smart Monitoring
        </p>

        <h1 className="text-5xl font-extrabold text-white mt-3">
          AI Water Leakage Dashboard
        </h1>

        <p className="text-slate-400 text-lg mt-4 max-w-3xl leading-8">
          Monitor real-time pipeline conditions using Artificial Intelligence.
          Detect water leakage early, reduce maintenance costs, and improve
          pipeline reliability with intelligent sensor analysis.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mb-10">
        <StatsCard title="Flow Rate" value="120 L/min" color="text-cyan-400" />

        <StatsCard title="Pressure" value="32 PSI" color="text-green-400" />

        <StatsCard title="Active Alerts" value="2" color="text-red-400" />

        <StatsCard
          title="AI Health Score"
          value="95%"
          color="text-purple-400"
        />
      </div>

      {/* Main Dashboard */}

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left */}

        <div className="lg:col-span-2">
          <SensorForm onAnalyze={handleAnalyze} />
        </div>

        {/* Right */}

        <div className="lg:col-span-3">
          <AIResult result={aiResult} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Home;
