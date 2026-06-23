import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/register">Registieren</Link>
    </nav>
  );
}

export default Navbar;
