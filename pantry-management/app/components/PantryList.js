'use client';

import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase';  // Corrected import path
import { List, ListItem, ListItemText, Container, TextField } from '@mui/material';

const PantryList = ({ setItemToEdit }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'pantry'), (snapshot) => {
      const itemsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsData);
    });

    return () => unsubscribe();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 3 }}>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <List>
        {filteredItems.map((item) => (
          <ListItem key={item.id} button onClick={() => setItemToEdit(item)}>
            <ListItemText primary={`${item.name} - ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PantryList;
