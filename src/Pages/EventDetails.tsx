import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { EventItem } from "../types/event";
import { Link } from "react-router";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState<EventItem | null>(null);
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  useEffect(() => {
    const ladeEvent = async () => {
      const response = await fetch(`http://localhost:3001/api/events/${id}`);
      const data = await response.json();
      setEvent(data);
    };

    ladeEvent();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3001/api/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    navigate("/events");
  };

  if (!event) {
    return <p>Lädt...</p>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-10 items-center justify-center px-4 relative">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-bold mb-8 text-blue-700">{event.title}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-2xl">
            <h2 className="text-sm text-gray-500 uppercase">Ort</h2>
            <p className="text-xl font-semibold">{event.location}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl">
            <h2 className="text-sm text-gray-500 uppercase">Erstellt am</h2>
            <p className="text-xl font-semibold">
              {new Date(event.createdAt).toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Beschreibung</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>

        {user && user.id === event.organizerId && (
          <div className="text-xl flex gap-2 justify-end">
            <Link
              to={`/events/${event.id}/edit`}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-2xl"
            >
              Bearbeiten
            </Link>

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-2xl"
            >
              Löschen
            </button>
          </div>
        )}
      </div>

      <Link
        to="/events"
        className=" hover:bg-blue-800 hover:text-white font-bold py-3 px-8 rounded-xl shadow-lg"
      >
        ← Zurück zur Übersicht
      </Link>
    </div>
  );
}

export default EventDetails;
