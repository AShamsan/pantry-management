'use client';

import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Configuration, OpenAIApi } from 'openai';  // Correct import

const RecipeSuggestion = ({ pantryItems }) => {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Suggest a recipe using the following ingredients: ${pantryItems.map((item) => item.name).join(', ')}`,
      maxTokens: 150,
    });

    setRecipe(response.data.choices[0].text.trim());
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Button variant="contained" color="primary" onClick={fetchRecipe}>
        Get Recipe Suggestion
      </Button>
      {recipe && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          {recipe}
        </Typography>
      )}
    </Container>
  );
};

export default RecipeSuggestion;
