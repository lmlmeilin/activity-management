import React, { useState } from 'react';
import {db} from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CreateEvent = () => {
    const [formData, setFormData] = useState({title:'', date:'', time:'', venue: '', desc: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "events"), {
          ...formData
        });
        console.log("Event Document written with ID: ", docRef.id);
        alert("Form has been saved successfully!");
        // Reset form or show error message
      } catch (e) {
        console.error("Error adding event document: ", e);
      }
    };

  return (
  
  <form onSubmit={handleSubmit}>
  <h4>Create Event</h4>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Enter a Event Title</label>
    <input type="text" className="form-control" id="title" placeholder="Enter a event title" name="title" value={formData.title} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="date" className="form-label">Enter a Date</label>
    <input type="date" className="form-control" id="date" placeholder="Enter a date" name="date" value={formData.date} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="time" className="form-label">Enter a Time</label>
    <input type="time" className="form-control" id="time" placeholder="Enter a time" name="time" value={formData.time} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="venue" className="form-label">Enter a Venue</label>
    <input type="venue" className="form-control" id="venue" placeholder="Enter a venue" name="venue" value={formData.venue} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Enter a Description</label>
    <input type="desc" className="form-control" id="desc" placeholder="Enter a description" name="desc" value={formData.desc} onChange={handleChange} />
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
</form>

  );
};


export default CreateEvent;