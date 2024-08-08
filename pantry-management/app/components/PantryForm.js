'use client';

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';  // Corrected import path

const PantryForm = ({ itemToEdit, setItemToEdit }) => {
  const [item, setItem] = useState(itemToEdit || { name: '', quantity: 0 });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (itemToEdit) {
      const itemRef = doc(firestore, 'pantry', itemToEdit.id);
      await updateDoc(itemRef, item);
      setItemToEdit(null);
    } else {
      await addDoc(collection(firestore, 'pantry'), item);
    }
    setItem({ name: '', quantity: 0 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Item Name"
        name="name"
        value={item.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        name="quantity"
        value={item.quantity}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {itemToEdit ? 'Update Item' : 'Add Item'}
      </Button>
    </Box>
  );
};

export default PantryForm;
