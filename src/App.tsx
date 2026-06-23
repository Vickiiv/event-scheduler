import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;
