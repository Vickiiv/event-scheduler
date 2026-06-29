import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative  min-h-dvh w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/header.jpg"
      ></img>

      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 px-6">
        <button
          onClick={() => navigate("/events")}
          className="w-full max-w-xs sm:w-auto bg-blue-700/80 hover:bg-blue-800 text-white font-semibold py-3 px-6 text-lg sm:py-4 sm:px-8 sm:text-xl rounded-2xl shadow-lg transition"
        >
          Events entdecken
        </button>
        <button
          onClick={() => navigate("/events/new")}
          className="w-full max-w-xs sm:w-auto bg-blue-700/80 hover:bg-blue-800 text-white font-semibold py-3 px-6 text-lg sm:py-4 sm:px-8 sm:text-xl rounded-2xl shadow-lg transition"
        >
          Event erstellen
        </button>
      </div>
    </div>
  );
}

export default Home;
