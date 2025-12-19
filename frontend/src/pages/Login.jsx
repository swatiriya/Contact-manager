import { useState } from "react";

function Login({ onLogin, onBack }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      const name = form.email.split("@")[0] || "User";
      onLogin({ email: form.email, name });
    }
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <h2 style={{ marginTop: 0 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="submit">Login</button>
          <button type="button" onClick={onBack} style={{ background: "var(--card-bg)" }}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
