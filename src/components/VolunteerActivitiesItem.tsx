// VolunteerActivitiesItem.tsx
import React, { useState } from 'react';
import { VolunteerActivities } from './VolunteerActivities'; 

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
  
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
      <img src={volunteerActivity.image} alt={volunteerActivity.name} style={{ width: '100px', marginRight: '20px' }} />
      <h3>{volunteerActivity.name}</h3>
      <p>{volunteerActivity.description}</p>
      <button onClick={toggleFormVisibility}>Sign Up</button>
      {isFormVisible && (
        <form>
          <h4>Fill The below form to let us know about your volunteering preferences and get added to Big At Heart Volunteers WhatsApp Group</h4>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your fullname" name="exampleInput" />
        </div>
        <div className="mb-3">
          <select className="form-select" id="formGroupExampleInput2" name="genderOption">
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">Email</label>
          <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Example input placeholder" name="exampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput4" className="form-label">Whatsapp Phone Number</label>
          <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Example input placeholder" name="exampleInput" />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
        
        // <form>
        //   <label>
        //     Name:
        //     <input type="text" name="name" />
        //   </label>
        //   <label>
        //     Email:
        //     <input type="email" name="email" />
        //   </label>
        //   {/*Should include other profile details*/}
        //   <button type="submit">Submit</button>
        // </form>
      )}
    </div>
  );
};

export default VolunteerActivitiesItem;
