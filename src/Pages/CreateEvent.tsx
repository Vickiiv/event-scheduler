import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          date,
          location,
          latitude: Number(latitude),
          longitude: Number(longitude),
        }),
      });

      if (!response.ok) {
        setError("Ungültige Eingabe");
        return;
      }

      const data = await response.json();
      console.log(data);
      navigate("/events");
    } catch {
      setError("Server nicht erreichbar, Bitte später erneut versuchen.");
    }
  };

  return (
    <div className=" text-2xl m-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col bg-white rounded-2xl w-full max-w-xl shadow-2xl"
      >
        <h1 className="font-bold text-2xl py-2 text-center ">Event anlegen</h1>
        {error && (
          <p className="text-center text-red-800 font-bold text-xl">{error}</p>
        )}

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="title"
        >
          Titel
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="description"
        >
          Beschreibung
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="date"
        >
          Datum
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="location"
        >
          Ort
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="latitude"
        >
          Breitengrad
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="latitude"
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="longitude"
        >
          Längengrad
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          id="longitude"
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        <button
          className="font-bold w-full sm:w-auto bg-blue-700 text-white py-2 mx-3 rounded-2xl mt-2 mb-6 hover:bg-blue-900 cursor-pointer"
          type="submit"
        >
          Event erstellen
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
