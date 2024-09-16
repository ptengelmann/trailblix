import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/profiles" element={<ProfileList />} />
      </Routes>
    </Router>
  );
}

export default App;
