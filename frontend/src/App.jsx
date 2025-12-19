import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import AllContacts from "./pages/AllContacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

  const [page, setPage] = useState("home");
  const navigate = (p) => setPage(p);

  return (
    <div className="container">
      <Header theme={theme} onToggleTheme={toggleTheme} onNavigate={navigate} />
      {page === "home" && <ContactForm onAdd={addContact} />}
      {page === "contacts" && (
        <AllContacts contacts={contacts} onDelete={deleteContact} onToggleFavorite={toggleFavorite} onBack={() => navigate("home")} />
      )}
      {page === "login" && <Login onLogin={handleLogin} onBack={() => navigate("home")} />}
      {page === "signup" && <Signup onSignup={handleSignup} onBack={() => navigate("home")} />}
    </div>
  );
}

export default App;
