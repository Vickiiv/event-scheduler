import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError("E-Mail oder Passwort ist falsch.");
        return;
      }

      const data = await response.json();
      console.log(data);
      const token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch {
      setError("Server nicht erreichbar. Bitte später erneut versuchen.");
    }
  };

  return (
    <div className=" text-2xl m-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col bg-white rounded-2xl w-full max-w-xl shadow-2xl"
      >
        <h1 className="font-bold text-2xl py-2 text-center ">Login</h1>
        {error && (
          <p className="text-center text-red-800 font-bold text-xl">{error}</p>
        )}
        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="focus:outline-2 focus:outline-blue-700 bg-gray-50 border-2 rounded-xl px-2 py-3 mx-5 mb-6"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="mx-5 mb-1 font-bold text-2xl pl-2 pt-2"
          htmlFor="password"
        >
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
          className="font-bold w-full sm:w-auto bg-blue-700 text-white py-2 mx-3 rounded-2xl mt-2 mb-6 hover:bg-blue-900 cursor-pointer"
          type="submit"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;
