import { useState } from "react";

function Signup({ onSignup, onBack }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignup) {
      onSignup({ name: form.name || form.email.split("@")[0] || "User", email: form.email });
    }
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <h2 style={{ marginTop: 0 }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="submit">Create account</button>
          <button type="button" onClick={onBack} style={{ background: "var(--card-bg)" }}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
