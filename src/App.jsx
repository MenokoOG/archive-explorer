import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage';
import ResultsPage from './views/ResultsPage';
import AboutPage from './views/AboutPage';
import './index.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  // Apply the theme class to the body element when the theme changes
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const toggleDarkTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <Router>
      <nav className="bg-blue-600 dark:bg-gray-700 p-4 text-center text-white">
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/about" className="mx-4 hover:underline">About</Link>
        <button 
          onClick={toggleDarkTheme} 
          className="ml-4 bg-white text-blue-600 dark:text-gray-700 dark:bg-white px-4 py-2 rounded-lg"
        >
          {darkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
