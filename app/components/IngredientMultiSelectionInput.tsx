import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {foodDataCentral} from "@/app/data/FoundationFoods";

export default function IngredientMultiSelectionInput({ingredients, setIngredients}: {ingredients: string[], setIngredients: any}) {
  function handleIngredientsChange(value: {description: string}[]) {
      setIngredients(value.map(i => i.description))
      console.log(value)
  }
  function ingredientsMapping() {
    return foodDataCentral.FoundationFoods.filter(food => ingredients.some(ingredient => food.description === ingredient));
  }
  return (
      <Autocomplete
        multiple
        id="tags-outlined"
        value={ingredientsMapping(ingredients)}
        onChange={(e, value) => handleIngredientsChange(value)}
        options={foodDataCentral.FoundationFoods}
        getOptionLabel={(option) => option.description}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ingredients"
          />
        )}
      />
  );
}