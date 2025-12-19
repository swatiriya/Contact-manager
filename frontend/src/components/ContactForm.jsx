import { useState } from "react";

function ContactForm({ onAdd }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onAdd) {
      onAdd(contact);
    }

    setContact({ name: "", email: "", phone: "" });
  };

  return (
    <form id="add" onSubmit={handleSubmit} style={{ marginBottom: "35px" }}>
      <h2>Add New Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={contact.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={contact.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={contact.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Contact</button>
    </form>
  );
}

export default ContactForm;
