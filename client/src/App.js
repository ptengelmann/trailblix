import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import Dashboard from './Dashboard'; // <-- Import the Dashboard component
import NavBar from './NavBar';
import Footer from './Footer';
import Signup from './Signup';  // <-- New SignUp component
import Login from './Login';    // <-- New Login component
import CareerRecommendations from './CareerRecommendations';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* <-- Add the Dashboard route */}
        <Route path="/profile" element={<Footer/>} />
        <Route path="/signup" element={<Signup />} />  {/* <-- New SignUp Route */}
        <Route path="/login" element={<Login />} />    {/* <-- New Login Route */}
        <Route path="/careers" element={<CareerRecommendations />} /> {/* Ensure this route is added */}

      </Routes>
    </Router>
  );
}

export default App;
