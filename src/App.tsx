import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateEvent from "./Pages/CreateEvent";
import EditEvent from "./Pages/EditEvent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/events/new"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id/edit"
          element={
            <ProtectedRoute>
              <EditEvent />
            </ProtectedRoute>
          }
        />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
