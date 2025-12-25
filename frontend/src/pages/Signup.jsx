import { useState } from "react";
import { userRegister } from "../services/api";

function Signup({ onSignup, onShowLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await userRegister(form.name || form.email.split("@")[0], form.email, form.password);
      onSignup({ name: form.name || form.email.split("@")[0] || "User", email: form.email, ...response.data?.user });
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "60px auto" }}>
      <h2 style={{ marginTop: 0, textAlign: "center" }}>Create Account</h2>
      {error && <div style={{ color: "#ff6b6b", marginBottom: 12, padding: 8, background: "rgba(255,107,107,0.1)", borderRadius: 4 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" disabled={loading} style={{ width: "100%" }}>{loading ? "Creating account..." : "Create account"}</button>
      </form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <p>Already have an account? <button type="button" onClick={onShowLogin} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", textDecoration: "underline", fontWeight: "700" }}>Login</button></p>
      </div>
    </div>
  );
}

export default Signup;
