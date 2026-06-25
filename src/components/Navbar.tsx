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
    <div className="text-xl py-2 flex justify-between fixed top-0 left-0 w-full backdrop-blur-2xl border-b shadow-md  bg-white/50 px-6">
      <div>
        <img className="py-2 px-2 w-22" src="/assets/logo.png" alt="logo" />
      </div>
      <nav className="flex justify-center items-center  gap-4">
        <Link
          className="font-bold hover:text-black text-gray-600 text-xl"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-bold hover:text-black text-gray-600 text-xl"
          to="/events"
        >
          Events
        </Link>
        <Link
          className="font-bold hover:text-black text-gray-600 text-xl"
          to="events/new"
        >
          Event erstellen
        </Link>
      </nav>
      <div className="flex justify-center items-center gap-2">
        {token ? (
          <button
            className="rounded-2xl bg-blue-700 hover:bg-blue-900 cursor-pointer py-2 px-6 text-white font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <nav className=" flex gap-2">
            <Link
              className="bg-blue-600 py-2 px-6 text-white rounded-2xl hover:bg-blue-900 font-bold cursor-pointer  "
              to="/register"
            >
              Registieren
            </Link>
            <Link
              className="bg-gray-600 py-2 px-6 text-white rounded-2xl hover:bg-gray-900 font-bold cursor-pointer  "
              to="/login"
            >
              {" "}
              Login
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
