// App.tsx
import React, { useState } from 'react';
import ActivityItem from './components/ActivityItem'; 
import { activities } from './components/Activity';
import VolunteerActivitiesItem from './components/VolunteerActivitiesItem';
import { volActsList } from './components/VolunteerActivities';
import Profile from './components/Profile'; 

const App: React.FC = () => {
  const [activeActivityId, setActiveActivityId] = useState<number | null>(null);

  const handleActivityClick = (id: number, activityString: string) => {
    setActiveActivityId(id);
    console.log(`Activity Clicked: ID=${id}, String=${activityString}`);
  };

  return (
    
    <div className = "app-container">
      <div className = "profile">
        <h1> Profile Page </h1>
        <Profile />

      </div>
    
      <div className="activities-list">

        <h1>Volunteer Categories</h1>
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
      <h2>Volunteer Events </h2>
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
