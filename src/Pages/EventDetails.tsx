import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { EventItem } from "../types/event";
import { Link } from "react-router";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    const ladeEvent = async () => {
      const response = await fetch(`http://localhost:3001/api/events/${id}`);
      const data = await response.json();
      setEvent(data);
    };

    ladeEvent();
  }, [id]);

  if (!event) {
    return <p>Lädt...</p>;
  }

  return (
    <div className="flex flex-col m-20">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.location}</p>
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
