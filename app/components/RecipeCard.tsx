import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Recipe} from '../types/recipe';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function RecipeCard({recipe, onSelectRecipe}:{recipe: Recipe, onSelectRecipe: any}){
  return (
    <Card sx={{ minWidth: 275 }} onClick={onSelectRecipe}>
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>tags</Typography>
        <Typography variant="body2">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
