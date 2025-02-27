import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {foodDataCentral} from "@/app/data/foundationDownload";

export default function IngredientMultiSelectionInput() {
  return (
      <Autocomplete
        multiple
        id="tags-outlined"
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