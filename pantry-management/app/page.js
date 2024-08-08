'use client';

import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import PantryForm from './components/PantryForm';
import PantryList from './components/PantryList';
import ImageCapture from './components/ImageCapture';
import RecipeSuggestion from './components/RecipeSuggestion';

export default function Home() {
  const [itemToEdit, setItemToEdit] = useState(null);
  const [pantryItems, setPantryItems] = useState([]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Pantry Management
      </Typography>
      <Box sx={{ mt: 4 }}>
        <PantryForm itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} />
        <PantryList setItemToEdit={setItemToEdit} setPantryItems={setPantryItems} />
        <ImageCapture />
        <RecipeSuggestion pantryItems={pantryItems} />
      </Box>
    </Container>
  );
}
