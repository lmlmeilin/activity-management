// NewApp.tsx
import React, { useState } from 'react';
import CreateEvent from './components/CreateEvent';
import DisplayEvent from './components/DisplayEvent';

const NewApp: React.FC = () => {

return (
    <div className = "main"> 
    <h1>Admin Create / Edit / Delete Events</h1>
        <div className = "createEvent">
            <CreateEvent />
        </div>

        <div className = "displayEvent">
            <DisplayEvent />
        </div>

    </div>

        
);

};

export default NewApp;
