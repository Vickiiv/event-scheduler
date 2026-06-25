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
          className="bg-blue-700/80 text-white font-bold py-6 px-12 text-5xl rounded-3xl hover:bg-blue-900 cursor-pointer shadow-xl"
        >
          Events entdecken
        </button>
        <button
          onClick={() => navigate("/events/new")}
          className="bg-blue-700/80 text-white font-bold py-6 px-12 text-5xl rounded-3xl hover:bg-blue-900 cursor-pointer shadow-xl"
        >
          Event erstellen
        </button>
      </div>
    </div>
  );
}

export default Home;
