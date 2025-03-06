import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {foodDataCentral} from "@/app/data/foundationDownload";

export default function IngredientMultiSelectionInput({ingredients, setIngredients}: {ingredients: string[], setIngredients: any}) {
  function handleIngredientsChange(value: {description: string}[]) {
      setIngredients(value.map(i => i.description))
      console.log(value.map(i => i.description))
  }
  return (
      <Autocomplete
        multiple
        id="tags-outlined"
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