import React, { useState } from 'react';
import {db} from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState({uname:'', pw:'', name: '', email: '', wsNum: '', dob: '', gender: '', occupation: '', school: '', education: '', availability: '', drives: '', vehicle:'', skills: '', interests: '', commitment: '', immigration_status: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "profiles"), {
        ...formData
      });
      console.log("Document written with ID: ", docRef.id);
      navigate('/profiles'); // Navigate to the profiles page
      // Reset form or show error message
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
    <h4>Fill the below form for us to get to know you!</h4>

    <div className="mb-3">
      <label htmlFor="uname" className="form-label">Enter a username (Please remember in order to retrieve Profile Details)</label>
      <input type="text" className="form-control" id="uname" placeholder="Enter your username" name="uname" value={formData.uname} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="pw" className="form-label">Enter a password (Please remember in order to retrieve Profile Details)</label>
      <input type="password" className="form-control" id="pw" placeholder="Enter your password" name="pw" value={formData.pw} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="name" className="form-label">Full Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your Full Name" name="name" value={formData.name} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="wsNum" className="form-label">Whatsapp Phone Number</label>
      <input type="text" className="form-control" id="wsNum" placeholder="Enter your phone number" name="wsNum" value={formData.wsNum} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="dob" className="form-label">Date of Birth</label>
      <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="gender" className="form-label">Gender</label>
      <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Others">Others</option>
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="occ" className="form-label">Occupation</label>
      <input type="text" className="form-control" id="occ" name="occupation" placeholder="Enter your Occupation" value={formData.occupation} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="school" className="form-label">Current School (if applicable)</label>
      <input type="text" className="form-control" id="sch" name="school" placeholder="Enter your Current School (if applicable)" value={formData.school} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="education" className="form-label">Education Background</label>
      <input type="text" className="form-control" id="ed" name="education" placeholder="Enter your Education Background" value={formData.education} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="availability" className="form-label">Availability  (in terms of days of the week, time of the day, other ad-hoc etc)</label>
      <input type="text" className="form-control" id="avail" name="availability" placeholder="Enter your availability" value={formData.availability} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="drives" className="form-label">Do you have a driving license?</label>
      <select className="form-select" id="drives" name="drives" value={formData.drives} onChange={handleChange}>
        <option value="">Select Yes/No</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="vehicle" className="form-label">Do you own a vehicle?</label>
      <select className="form-select" id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange}>
        <option value="">Select Yes/No</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="skills" className="form-label">Indicate skills you possess that are relevant</label>
      <input type="text" className="form-control" id="skills" name="skills" placeholder="Enter your skills" value={formData.skills} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="interests" className="form-label">Indicate interests in volunteering (What type of volunteering do you want to do?)</label>
      <input type="text" className="form-control" id="interests" name= "interests" placeholder="Enter your interests" value={formData.interests} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="commitment" className="form-label">Indicate your commitment level – ad hoc/regular If regular – weekly, monthly, How many hours?</label>
      <input type="text" className="form-control" id="commitment" name= "commitment" placeholder="Enter your commitment level" value={formData.commitment} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="immigration" className="form-label">Select your immigration status</label>
      <select className="form-select" id="immigration" name="immigration_status" value={formData.immigration_status} onChange={handleChange}>
        <option value="">Select Citizen/PR/EP/DP/LOC/WP/Visitor</option>
        <option value="Citizen">Citizen</option>
        <option value="PR">PR</option>
        <option value="EP">EP</option>
        <option value="DP">DP</option>
        <option value="LOC">LOC</option>
        <option value="WP">WP</option>
        <option value="Visitor">Visitor</option>
      </select>
    </div>

    <button type="submit" className="btn btn-success">Submit</button>
  </form>

  );
};

export default Profile;