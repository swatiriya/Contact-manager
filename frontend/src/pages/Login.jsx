import { useState } from "react";
import { userLogin } from "../services/api";

function Login({ onLogin, onShowSignup }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await userLogin(form.email, form.password);
      const name = form.email.split("@")[0] || "User";
      onLogin({ email: form.email, name, ...response.data?.user });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "60px auto" }}>
      <h2 style={{ marginTop: 0, textAlign: "center" }}>Welcome to Connectly</h2>
      {error && <div style={{ color: "#ff6b6b", marginBottom: 12, padding: 8, background: "rgba(255,107,107,0.1)", borderRadius: 4 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" disabled={loading} style={{ width: "100%" }}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <p>Don't have an account? <button type="button" onClick={onShowSignup} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", textDecoration: "underline", fontWeight: "700" }}>Sign up</button></p>
      </div>
    </div>
  );
}

export default Login;
