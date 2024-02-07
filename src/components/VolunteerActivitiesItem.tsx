// VolunteerActivitiesItem.tsx
import React from 'react';
import { VolunteerActivities } from './VolunteerActivities'; 

type VolunteerActivitiesItemProps = {
  volunteerActivity: VolunteerActivities;
};

const VolunteerActivitiesItem: React.FC<VolunteerActivitiesItemProps> = ({ volunteerActivity }) => {
  return (
    <div style={{ padding: '10px', margin: '5px', border: '1px solid #ddd', borderRadius: '8px' }}>
      {volunteerActivity.name}
    </div>
  );
};

export default VolunteerActivitiesItem;
