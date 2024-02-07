import React, { useState } from 'react';
import {db} from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Profile = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...formData
      });
      console.log("Document written with ID: ", docRef.id);
      // Reset form or show success message
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default Profile;