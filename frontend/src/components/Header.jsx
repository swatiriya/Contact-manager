function Header({ theme = "dark", onToggleTheme, onNavigate }) {
  return (
    <header
      style={{
        background: "var(--nav-bg)",
        color: "var(--nav-text)",
        padding: "14px 24px",
        marginBottom: "30px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              display: "grid",
              placeItems: "center",
              fontWeight: "800",
              fontSize: "16px",
              color: "#0b1221",
              boxShadow: "0 10px 26px rgba(99, 102, 241, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            C
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "800",
                letterSpacing: "0.3px",
                color: "var(--nav-text)",
              }}
            >
              Connectly
            </div>
            <div style={{ fontSize: "12px", color: "var(--muted)" }}>
              Contact Management System
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("contacts")}
            style={{
              color: "#0b1221",
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              boxShadow: "0 10px 30px rgba(34, 211, 238, 0.35)",
              fontWeight: "700",
              transition: "transform 150ms ease, box-shadow 150ms ease",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(34, 211, 238, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(34, 211, 238, 0.35)";
            }}
          >
            All Contacts
          </button>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate("login")}
            style={{
              marginLeft: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.06)",
              background: "var(--card-bg)",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate("signup")}
            style={{
              marginLeft: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "#0b1221",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            Signup
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            style={{
              marginLeft: "10px",
              background: "var(--toggle-track)",
              color: "var(--primary-text)",
              width: "64px",
              height: "32px",
              padding: "0",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 24px var(--primary-shadow)",
              fontWeight: "700",
              transition: "transform 120ms ease, box-shadow 120ms ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 12px 30px var(--primary-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 24px var(--primary-shadow)";
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span
              style={{
                position: "absolute",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "var(--toggle-knob)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
                transform: theme === "dark" ? "translateX(10px)" : "translateX(-10px)",
                transition: "transform 140ms ease",
                display: "grid",
                placeItems: "center",
                color: theme === "dark" ? "#f8fafc" : "#f59e0b",
                fontSize: "15px",
              }}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                pointerEvents: "none",
                color: "transparent",
                fontSize: "14px",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
