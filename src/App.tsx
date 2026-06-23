import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Event from "./Pages/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
