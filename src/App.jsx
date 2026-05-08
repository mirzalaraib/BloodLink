// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './components/auth/AuthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage initialView="login" />} />
        <Route path="/register" element={<AuthPage initialView="register" />} />
      </Routes>
    </Router>
  );
}

export default App;