import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        setError(
          "Registrierung fehlgeschlagen. E-Mail evtl. schon vergeben oder Passwort zu kurz (min. 8 Zeichen).",
        );
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch {
      setError("Server nicht erreichbar. Bitte später erneut versuchen.");
    }
  };

  return (
    <div className=" text-2xl min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className=" px-8 py-12 flex flex-col bg-white rounded-2xl w-full max-w-xl shadow-2xl"
      >
        <h1 className="font-bold text-2xl py-2 text-center ">
          Konto erstellen
        </h1>
        {error && (
          <p className="text-center text-red-800 font-bold text-xl">{error}</p>
        )}
        <p className="text-center text-gray-500 text-xl">
          Jetzt registieren und Events erstellen
        </p>

        <label className="mx-5 mb-1 text-2xl pl-2 pt-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mx-5 mb-1 text-2xl pl-2 pt-2" htmlFor="password">
          Passwort
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="font-bold w-full sm:w-auto bg-blue-700 text-white py-3 mx-3 rounded-2xl mt-2 mb-6 hover:bg-blue-900 cursor-pointer"
          type="submit"
        >
          Konto erstellen
        </button>

        <div className="flex justify-center gap-2">
          <p className="text-gray-500">Bereits ein Konto?</p>
          <Link to="/login" className="text-blue-700 hover:underline">
            Anmelden
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
