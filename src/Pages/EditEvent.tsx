import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Form field state, pre-filled with the existing event's data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  // Load the existing event's data when the component mounts (or id changes)
  useEffect(() => {
    const ladeEvent = async () => {
      const response = await fetch(`http://localhost:3001/api/events/${id}`);
      const data = await response.json();

      setTitle(data.title);
      setDescription(data.description);
      setDate(data.date.slice(0, 10));
      setLocation(data.location);
      setLatitude(String(data.latitude));
      setLongitude(String(data.longitude));
    };
    ladeEvent();
  }, [id]);

  // Sends the updated event data to the API and redirects to the event's detail page
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setError("");

    try {
      const response = await fetch(`http://localhost:3001/api/events/${id}`, {
        method: "PUT",
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
      navigate(`/events/${id}`);
    } catch {
      setError("Server nicht erreichbar, Bitte später erneut versuchen");
    }
  };

  return (
    <div className=" text-2xl m-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col bg-white rounded-2xl w-full max-w-xl shadow-2xl"
      >
        <h1 className="font-bold text-2xl py-2 text-center ">
          Event bearbeiten
        </h1>
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
          Speichern
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
