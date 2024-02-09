import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);
  const [editableRowId, setEditableRowId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      setEvents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchEvents();
  }, []);

  const deleteEvent = async (event) => {
    await deleteDoc(doc(db, "events", event.id));
    console.log("success");
    alert("Event deleted successfully");
  };

  const editEvent = (eventId) => {
    setEditableRowId(eventId);
  };

  const saveEvent = async (event) => {
    await updateDoc(doc(db, "events", event.id), {
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      desc: event.desc,
    });
    setEditableRowId(null);
  };

  const renderCell = (event, field) => {
    if (editableRowId === event.id) {
      return (
        <TextField
          type="text"
          value={event[field]}
          onChange={(e) => handleInputChange(event.id, field, e.target.value)}
        />
      );
    } else {
      return event[field];
    }
  };

  const handleInputChange = (id, field, value) => {
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, [field]: value } : event
    );
    setEvents(updatedEvents);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{renderCell(event, 'title')}</TableCell>
              <TableCell>{renderCell(event, 'date')}</TableCell>
              <TableCell>{renderCell(event, 'time')}</TableCell>
              <TableCell>{renderCell(event, 'venue')}</TableCell>
              <TableCell>{renderCell(event, 'desc')}</TableCell>
              <TableCell>
                {editableRowId === event.id ? (
                  <IconButton onClick={() => saveEvent(event)}>
                    <SaveIcon />
                  </IconButton>
                ) : (
                  <>
                    <IconButton onClick={() => editEvent(event.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteEvent(event)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayEvent;
