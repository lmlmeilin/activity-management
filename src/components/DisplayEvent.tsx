import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      setEvents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchEvents();
  }, []);

  return (

<table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Venue</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {events.map((event) => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.date}</td>
            <td>{event.time}</td>
            <td>{event.venue}</td>
            <td>{event.desc}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
    ))}
  </tbody>
</table>


  );
};

export default DisplayEvent;
