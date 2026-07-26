import { Droplets, Gauge, TriangleAlert, Brain } from "lucide-react";

function StatsCard({ title, value, color }) {
  const icons = {
    "Flow Rate": <Droplets size={26} />,
    Pressure: <Gauge size={26} />,
    "Active Alerts": <TriangleAlert size={26} />,
    "AI Health Score": <Brain size={26} />,
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-slate-900/
        backdrop-blur-xl
        border border-slate-700/70
        rounded-3xl
        p-6
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-cyan-500/20
      "
    >
      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>{value}</h2>
        </div>

        <div
          className="
            p-4
            rounded-2xl
            bg-slate-800/70
            border
            border-slate-600
          "
        >
          <div className={color}>{icons[title]}</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Status</span>
          <span>Live</span>
        </div>

        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
