import { useEffect, useState } from "react";
import type { EventItem } from "../types/event";
import { Link } from "react-router";

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
    <div className="mt-30 flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-4">Events</h1>

      <div className="text-2xl  grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col border-2 border-gray-200 rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition"
          >
            <h2 className="font-semibold">{event.title}</h2>
            <p className="text-gray-500">{event.location}</p>
            <Link
              className="bg-blue-600 p-2 justify-between text-white rounded-lg text-center cursor-pointer  hover:bg-blue-800"
              to={`/events/${event.id}`}
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
