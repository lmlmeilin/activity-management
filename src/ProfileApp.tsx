// ProfileApp.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileList from './components/ProfileList';
import NewApp from './NewApp';

function ProfileApp() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Profile</Link> | <Link to="/profiles">Retrieve Profile</Link> | <Link to="/newapp">New App</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="/newapp" element={<NewApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default ProfileApp;
