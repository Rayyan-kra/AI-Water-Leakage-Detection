import { Droplets } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/20 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 p-2 rounded-xl shadow-lg shadow-cyan-500/30">
            <Droplets size={24} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Smart Water Leakage
            </h1>

            <p className="text-xs text-slate-400">
              AI Pipeline Monitoring System
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>

          <span className="text-emerald-300 text-sm font-medium">
            System Online
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
