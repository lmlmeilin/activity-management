import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs  } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ProfileList =  () => {

  const [profiles, setProfiles] = useState([]);
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input
  
  useEffect(() => {
    const fetchProfiles = async () => {
      if (username && password) { // Check if username and password are not empty
        const profilesCol = collection(db, "profiles");
        const q = query(profilesCol, where("uname", "==", username), where("pw", "==", password)); // Use the username state
        const querySnapshot = await getDocs(q);
        const profilesArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProfiles(profilesArray);
      }
    };
    fetchProfiles();
  }, [username, password]); // Add username and password as dependencies

  return (
    <div>
      <h2>Retrieve Your Profile</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <div key={profile.id}>
            {/* Display profile information */}
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Whatsapp: {profile.wsNum}</p>
            <p>DOB: {profile.dob}</p>
            <p>Gender: {profile.gender}</p>
           <p>Occupation: {profile.occupation}</p>
           <p>School: {profile.school}</p>
           <p>Education: {profile.education}</p>
           <p>Drives: {profile.drives}</p>
           <p>Vehicle: {profile.vehicle}</p>
           <p>Skills: {profile.skills}</p>
           <p>Interests: {profile.interests}</p>
           <p>Commitment: {profile.commitment}</p>
           <p>Immigration_status: {profile.immigration_status}</p>
          </div>
        ))
      ) : (
        <div>No profiles found for {username}</div>
      )}
    </div>
  );
};

export default ProfileList;
