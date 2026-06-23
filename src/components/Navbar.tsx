import { Link } from "react-router";
import { useNavigate } from "react-router";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="events/new">Event erstellen</Link>
      </nav>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <nav>
          <Link to="/register">Registieren</Link>
          <Link to="/login"> Login</Link>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
