function ContactCard({ contact, onDelete, onToggleFavorite }) {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid var(--card-border)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          aria-label={contact.favorite ? "Unfavorite" : "Mark as favorite"}
          onClick={() => onToggleFavorite && onToggleFavorite(contact.id)}
          style={{
            fontSize: "18px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: contact.favorite ? "#f59e0b" : "var(--muted)",
          }}
        >
          {contact.favorite ? "★" : "☆"}
        </button>

        <div>
          <h3 style={{ margin: 0 }}>{contact.name}</h3>
          <p style={{ margin: "6px 0 4px" }}>{contact.email}</p>
          <p style={{ margin: 0 }}>{contact.phone}</p>
        </div>
      </div>

      <div>
        <button style={{ marginRight: "10px" }}>Edit</button>
        <button
          style={{
            background: "var(--danger)",
            color: "var(--danger-text)",
            boxShadow: "0 10px 24px rgba(239, 68, 68, 0.35)",
          }}
          onClick={() => onDelete && onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
