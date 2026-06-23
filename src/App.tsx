import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
