import { useState } from "react";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Event anlegen</h1>

      <label htmlFor="title">Titel</label>
      <input
        id="title"
        type="text"
        value="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Beschreibung</label>
      <input
        id="description"
        type="text"
        value="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="date">Datum</label>
      <input
        id="date"
        type="date"
        value="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="location">Ort</label>
      <input
        id="location"
        type="text"
        value="loaction"
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="latitude">Breitengrad</label>
      <input
        id="latitude"
        type="number"
        value="latitude"
        onChange={(e) => setLatitude(e.target.value)}
      />

      <label htmlFor="longitude">Längengrad</label>
      <input
        id="longitude"
        type="number"
        value="longitude"
        onChange={(e) => setLongitude(e.target.value)}
      />

      <button type="submit">Event erstellen</button>
    </form>
  );
}

export default CreateEvent;
