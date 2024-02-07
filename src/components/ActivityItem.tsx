// ActivityItem.tsx
import React from 'react';
import { Activity } from './Activity'; 

type ActivityItemProps = {
  activity: Activity;
  isActive: boolean;
  onActivityClick: (activityId: number, activityString: string) => void;
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, isActive, onActivityClick }) => {
  const style = {
    cursor: 'pointer',
    color: isActive ? 'blue' : 'black',
    padding: '10px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: isActive ? '#f0f8ff' : 'transparent',
  };

  return (
    <li style={style} onClick={() => onActivityClick(activity.id, activity.name)}>
      {activity.name}
    </li>
  );
};

export default ActivityItem;
