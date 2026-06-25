import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
      <div className="mt-25">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/header.jpg"
        ></img>
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-10">
        <button
          onClick={() => navigate("/events")}
          className="bg-blue-700/80 hover:bg-blue-800 text-white font-semibold py-4 px-8 text-xl rounded-2xl shadow-lg transition"
        >
          Events entdecken
        </button>
        <button
          onClick={() => navigate("/events/new")}
          className="bg-blue-700/80 hover:bg-blue-800 text-white font-semibold py-4 px-8 text-xl rounded-2xl shadow-lg transition"
        >
          Event erstellen
        </button>
      </div>
    </div>
  );
}

export default Home;
