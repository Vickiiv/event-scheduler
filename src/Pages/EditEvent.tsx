import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

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

    const data = await response.json();
    console.log(data);
    navigate(`/events/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Event bearbeiten</h1>

      <label htmlFor="title">Titel</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Beschreibung</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="date">Datum</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="location">Ort</label>
      <input
        id="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="latitude">Breitengrad</label>
      <input
        id="latitude"
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />

      <label htmlFor="longitude">Längengrad</label>
      <input
        id="longitude"
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />

      <button type="submit">Speichern</button>
    </form>
  );
}

export default EditEvent;
