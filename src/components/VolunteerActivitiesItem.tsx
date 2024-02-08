// VolunteerActivitiesItem.tsx
import React, { useState } from 'react';
import { VolunteerActivities } from './VolunteerActivities'; 
import ProfileList from './ProfileList'

type VolunteerActivitiesItemProps = {
  volunteerActivity: VolunteerActivities;
};

const VolunteerActivitiesItem: React.FC<VolunteerActivitiesItemProps> = ({ volunteerActivity }) => {
  // State to manage form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmitEvent = () => {
    alert("You have successfully signed up for the event!")
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
      <img src={volunteerActivity.image} alt={volunteerActivity.name} style={{ width: '100px', marginRight: '20px' }} />
      <h3>{volunteerActivity.name}</h3>
      <p>{volunteerActivity.description}</p>
      <button onClick={toggleFormVisibility}>Sign Up</button>
      {isFormVisible && (
      <><ProfileList /><button onClick= {handleSubmitEvent} className="button">Submit</button></>
      )}
      
      
    </div>
  );
};

export default VolunteerActivitiesItem;
