import { useState } from "react";
import { useNavigate } from "react-router";

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
      console.log(data);
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch {
      setError("Server nicht erreichbar. Bitte später erneut versuchen.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <h1>Konto erstellen</h1>
      <p>Jetzt registieren und Events entdecken</p>

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Passwort</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Konto erstellen</button>
    </form>
  );
}

export default Register;
