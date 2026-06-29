import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  const linkClass =
    "font-bold text-gray-600 hover:text-black focus:text-blue-700";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-white/50 shadow-md backdrop-blur-2xl">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        <Link to="/" onClick={closeMenu}>
          <img className="w-16 md:w-20" src="/assets/logo.png" alt="logo" />
        </Link>

        <nav className="hidden items-center gap-4 text-lg lg:gap-6 lg:text-2xl md:flex">
          <Link className={linkClass} to="/">
            Home
          </Link>
          <Link className={linkClass} to="/events">
            Events
          </Link>
          <Link className={linkClass} to="/events/new">
            Event erstellen
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {token ? (
            <button
              className="cursor-pointer rounded-2xl bg-blue-700 px-6 py-2 font-bold text-white hover:bg-blue-900"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                className="rounded-2xl bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-900"
                to="/register"
              >
                Registrieren
              </Link>
              <Link
                className="rounded-2xl bg-gray-600 px-6 py-2 font-bold text-white hover:bg-gray-900"
                to="/login"
              >
                Login
              </Link>
            </>
          )}
        </div>

        <button
          className="flex cursor-pointer items-center justify-center rounded-lg p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menü umschalten"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t bg-white/90 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-lg">
            <Link className={linkClass} to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link className={linkClass} to="/events" onClick={closeMenu}>
              Events
            </Link>
            <Link className={linkClass} to="/events/new" onClick={closeMenu}>
              Event erstellen
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            {token ? (
              <button
                className="cursor-pointer rounded-2xl bg-blue-700 px-6 py-2 text-center font-bold text-white hover:bg-blue-900"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  className="rounded-2xl bg-blue-600 px-6 py-2 text-center font-bold text-white hover:bg-blue-900"
                  to="/register"
                  onClick={closeMenu}
                >
                  Registrieren
                </Link>
                <Link
                  className="rounded-2xl bg-gray-600 px-6 py-2 text-center font-bold text-white hover:bg-gray-900"
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
