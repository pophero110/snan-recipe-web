"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Box, Button, TextField} from "@mui/material";
import IngredientMultiSelectionInput from "@/app/components/IngredientMultiSelectionInput";
import InstructionMultiInput from "@/app/components/InstructionMultiInput";
import { revalidatePath } from 'next/cache'

export default function UploadRecipePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("/placeholder.svg?height=300&width=400");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([""]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe = {
      name,
      cookTimeInMin: 15,
      servings: 2,
      description,
      imageUrl,
      ingredients: ingredients.filter(i => i.trim() !== ""),
      instructions: instructions.filter(i => i.trim() !== "")
    };

    const response = await fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
    const recipe  = await response.json();

    router.push("/recipes/" + recipe._id);
    router.refresh(); // TODO: revalidate home page recipe list after new recipe is added
  };

  return (
    <Box
      component="form"
      sx={{'& > :not(style)': {mt: 2}}}
      autoComplete="off"
      onSubmit={async (e) => await handleSubmit(e)}
    >
      <TextField
        required
        fullWidth
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        multiline
        fullWidth
        maxRows={4}
        onChange={(e) => setDescription(e.target.value)}
      />
      <IngredientMultiSelectionInput ingredients={ingredients} setIngredients={setIngredients}></IngredientMultiSelectionInput>
      <InstructionMultiInput instructions={instructions} setInstructions={setInstructions}></InstructionMultiInput>
     <div className="flex justify-center"><Button type="submit" variant="contained">Create Recipe</Button></div>
    </Box>
  );
}
