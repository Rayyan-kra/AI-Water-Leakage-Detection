import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import waterVideo from "./assets/water.mp4";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src={waterVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-slate-950/5 -z-10"></div>

      {/* Content */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
