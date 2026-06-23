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
    <div className="flex flex-col m-20">
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>{event.location}</p>
        {user && user.id === event.organizerId && (
          <div>
            <Link to={`/events/${event.id}/edit`}>Bearbeiten</Link>
            <button onClick={handleDelete}>Löschen</button>
          </div>
        )}
      </div>
      <Link
        className="bg-blue-600 p-2 rounded text-white hover:bg-blue-800 cursor-pointer w-50"
        to="/events"
      >
        Zurück zur Übersicht
      </Link>
    </div>
  );
}

export default EventDetails;
