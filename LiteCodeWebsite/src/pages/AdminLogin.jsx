import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../utils/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    const success = loginAdmin(email, password);

    if (success) {
      navigate("/admin-dashboard", { replace: true });
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;
