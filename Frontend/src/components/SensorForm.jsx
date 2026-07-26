import { useState } from "react";
import { Droplets, Gauge, Sparkles } from "lucide-react";

function SensorForm({ onAnalyze }) {
  const [formData, setFormData] = useState({
    flowRate: "",
    pressure: "",
  });

  const handleSubmit = () => {
    if (!formData.flowRate || !formData.pressure) {
      alert("Please enter both Flow Rate and Pressure.");
      return;
    }

    onAnalyze(formData);
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl p-8 h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-cyan-500 p-3 rounded-xl">
          <Droplets className="text-white" size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Sensor Data Input</h2>

          <p className="text-slate-400 text-sm">Enter live pipeline readings</p>
        </div>
      </div>

      {/* Flow */}

      <div className="mb-6">
        <label className="text-slate-300 font-medium flex items-center gap-2 mb-2">
          <Droplets size={18} className="text-cyan-400" />
          Flow Rate (L/min)
        </label>

        <input
          type="number"
          placeholder="Example : 120"
          value={formData.flowRate}
          onChange={(e) =>
            setFormData({
              ...formData,
              flowRate: e.target.value,
            })
          }
          className="
            w-full
           bg-slate-900/30
            backdrop-blur-xl
            border
            border-slate-600
            rounded-xl
            p-4
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/30
            transition
          "
        />
      </div>

      {/* Pressure */}

      <div className="mb-8">
        <label className="text-slate-300 font-medium flex items-center gap-2 mb-2">
          <Gauge size={18} className="text-green-400" />
          Pressure (PSI)
        </label>

        <input
          type="number"
          placeholder="Example : 55"
          value={formData.pressure}
          onChange={(e) =>
            setFormData({
              ...formData,
              pressure: e.target.value,
            })
          }
          className="
            w-full
            bg-slate-900/30
            backdrop-blur-xl
            border
            border-slate-600
            rounded-xl
            p-4
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:border-green-500
            focus:ring-2
            focus:ring-green-500/30
            transition
          "
        />
      </div>

      <button
        onClick={handleSubmit}
        className="
          w-full
          flex
          justify-center
          items-center
          gap-3
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:scale-[1.02]
          active:scale-95
          transition-all
          duration-300
          text-white
          py-4
          rounded-xl
          font-bold
          shadow-lg
          shadow-cyan-500/30
        "
      >
        <Sparkles size={20} />
        Analyze with AI
      </button>

      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>Sensor Status</span>
          <span className="text-green-400 font-semibold">● Connected</span>
        </div>

        <div className="flex justify-between text-sm text-slate-400">
          <span>AI Engine</span>
          <span className="text-cyan-400">Gemini</span>
        </div>
      </div>
    </div>
  );
}

export default SensorForm;
