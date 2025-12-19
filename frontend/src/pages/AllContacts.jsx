import ContactList from "../components/ContactList";

function AllContacts({ contacts = [], onDelete, onToggleFavorite, onBack }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>All Contacts</h2>
        <div>
          <button
            type="button"
            onClick={onBack}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background: "var(--card-bg)",
              boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      </div>

      <ContactList contacts={contacts} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}

export default AllContacts;
