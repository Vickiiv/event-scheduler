import EventList from "../components/EventList";

// Page wrapper for the events overview, simply renders the EventList component
function Event() {
  return (
    <div>
      <EventList />
    </div>
  );
}

export default Event;
