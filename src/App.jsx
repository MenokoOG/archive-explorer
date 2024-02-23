// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage';
import ResultsPage from './views/ResultsPage';
import AboutPage from './views/AboutPage';
import './index.css';

function App() {
  // 1. Add Dark Theme State
  const [darkTheme, setDarkTheme] = useState(false);

  // 2. Toggle Dark Theme Functionality
  const toggleDarkTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  // 3. Apply Dark Theme Styles
  const themeClass = darkTheme ? 'dark-theme' : '';

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        {/* 4. Add Dark Theme Option in Navbar */}
        <button onClick={toggleDarkTheme}>{darkTheme ? 'Light Theme' : 'Dark Theme'}</button>
      </nav>
      <div className={`app-container ${themeClass}`}>
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
