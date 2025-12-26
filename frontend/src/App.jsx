import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import AllContacts from "./pages/AllContacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { userRegister } from "./services/api";

function App() {
  const [theme, setTheme] = useState("dark");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Riya Sharma",
      email: "riya@gmail.com",
      phone: "9876543210",
      favorite: false,
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9123456780",
      favorite: false,
    },
  ]);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const addContact = (contact) => {
    setContacts((prev) => [
      ...prev,
      {
        ...contact,
        favorite: false,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c)));
  };

  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    setUser(userData);
    setPage("home");
  };
  const handleSignup = (userData) => {
    setUser(userData);
    setPage("home");
  };
  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  const [page, setPage] = useState("home");
  const navigate = (p) => setPage(p);

  return (
    <>
      

      <div className="site-overlay">
        <div className="container">
          <Header theme={theme} onToggleTheme={toggleTheme} onNavigate={navigate} user={user} onLogout={handleLogout} />

          {!user ? (
            <>
              {page === "home" && <Login onLogin={handleLogin} onShowSignup={() => navigate("signup")} />}
              {page === "signup" && <Signup onSignup={handleSignup} onShowLogin={() => navigate("home")} />}
            </>
          ) : (
            <>
              {page === "home" && (
                <>
                  <ContactForm onAdd={addContact} />

                  <section className="about-section">
                    <h2 style={{ marginTop: 0 }}>About us</h2>
                    <p>
                      Connectly is a simple contact management demo built with React and Vite. You can add, edit, and delete contacts, and mark favorites.
                      This application is frontend-only and keeps data in memory during the session. Replace the background video in `public/` or change the `src` on the
                      `element to a different URL to customize the background.
                    </p>
                  </section>
                </>
              )}

              {page === "contacts" && (
                <AllContacts contacts={contacts} onDelete={deleteContact} onToggleFavorite={toggleFavorite} onBack={() => navigate("home")} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
