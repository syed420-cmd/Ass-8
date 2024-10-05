import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Props from "./Props";
import Product from "./Product";
import Hero from "./Components/Hero";
import Sec1 from "./Components/Sec1";
import Cards from "./Components/Cards";
import Nav from "./Components/Nav";
import Navbar from "./Components/Navbar";
import Bookdlts from "./Components/Bookdlts";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Booklist from "./Components/Booklist";
import PageRead from "./Components/PageRead";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">My App</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 border rounded-lg focus:outline-none transition duration-300"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookdlts" element={<Bookdlts />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/pageread" element={<PageRead />} />
      </Routes>
    </div>
  );
}


export default App;
