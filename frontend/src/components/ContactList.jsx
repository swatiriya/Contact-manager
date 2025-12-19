import ContactCard from "./ContactCard";

function ContactList({ contacts = [], onDelete, onToggleFavorite }) {
  const stats = [
    { label: "Total Contacts", value: contacts.length },
    { label: "Favorites", value: contacts.filter((c) => c.favorite).length || 0 },
    { label: "Recently Added", value: contacts.slice(-3).length },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "12px 14px",
              boxShadow: "0 10px 24px rgba(0, 0, 0, 0.18)",
            }}
          >
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "6px" }}>
              {item.label}
            </div>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--text)" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
