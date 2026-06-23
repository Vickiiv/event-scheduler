import { useEffect, useState } from "react";
import type { EventItem } from "../types/event";

function EventList() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const ladeEvents = async () => {
      const response = await fetch("http://localhost:3001/api/events");
      const data = await response.json();
      setEvents(data.results);
    };

    ladeEvents();
  }, []);
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <ul className="space-y-3">
        {events.map((event) => (
          <li key={event.id} className="border rounded-lg p-6">
            <h2 className="font-semibold">{event.title}</h2>
            <p className="text-gray-500">{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
