import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import LandingPage from './components/LandingPage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Toggle dark mode class for the body tag
    document.body.classList.toggle('dark-mode', !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route 
            path="/add-student" 
            element={
              <ErrorBoundary>
                <AddStudent />
              </ErrorBoundary>
            } 
          />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
