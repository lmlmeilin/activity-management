// VolunteerActivities.tsx

// Define a type for activity
export type VolunteerActivities = {
    id: number;
    activityid: number;
    name: string;
  };
  
// Mock data for the activities
  export const volActsList: VolunteerActivities[] =[
    { id: 1, activityid:1, name: 'Diwali 2023' },    
    { id: 2, activityid:2, name: 'Labour Day Walk and Donation Drive 2023' },
    { id: 3, activityid:1, name: 'Pongal Gala 2023 for Migrant Workers' },    
    { id: 4, activityid:1, name: 'Gift a Diwali 2022' },
    { id: 5, activityid:3, name: 'DARE - CPR + AED Training' },    
    { id: 6, activityid:4, name: 'All-About-Women Talk Series' },
    { id: 7, activityid:2, name: 'Donate Preloved Men Wears' },   
    { id: 8, activityid:2, name: 'Collection Drive for Flea Market 2022' },
    { id: 9, activityid:2, name: 'Labour Day Walk and Donation Drive 2022' },   
    { id: 10, activityid:4, name: 'Sponsor A Birthday' },
];