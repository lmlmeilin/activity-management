// ProfileApp.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileList from './components/ProfileList';
import NewApp from './NewApp';
import App from './App';

function ProfileApp() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Profile</Link> | <Link to="/profiles">Retrieve Profile</Link> | <Link to="/newapp">Admin Create Page</Link> | <Link to="/app">Volunteer Sign Up Page</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="/newapp" element={<NewApp />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}

export default ProfileApp;
