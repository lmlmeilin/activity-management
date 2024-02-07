// App.tsx
import React, { useState } from 'react';
import ActivityItem from './components/ActivityItem'; 
import { activities } from './components/Activity';

import VolunteerActivitiesItem from './components/VolunteerActivitiesItem';
import { volActsList } from './components/VolunteerActivities';

const App: React.FC = () => {
  const [activeActivityId, setActiveActivityId] = useState<number | null>(null);

  const handleActivityClick = (id: number, activityString: string) => {
    setActiveActivityId(id);
    console.log(`Activity Clicked: ID=${id}, String=${activityString}`);
  };

  return (
    <div className = "app-container">
      <div className="activities-list">

        <h1>Volunteering Categories</h1>
        <ul>
          {activities.map((activity) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              isActive={activity.id === activeActivityId}
              onActivityClick={handleActivityClick}
            />
          ))}
        </ul>
      </div>
    {activeActivityId != null && (
      <div className="volunteer-activities-grid">
      <h2>Volunteer Activities</h2>
      <div className="grid">
       {volActsList.filter(volAct => volAct.activityid === activeActivityId).map(volAct => (
          <VolunteerActivitiesItem 
          key={volAct.id} 
          volunteerActivity={volAct} />
        ))} 
      </div>
    </div>
  )}
</div>
);

};

export default App;
