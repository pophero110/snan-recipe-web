"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Box, Button, TextField} from "@mui/material";
import IngredientMultiSelectionInput from "@/app/components/IngredientMultiSelectionInput";
import InstructionMultiInput from "@/app/components/InstructionMultiInput";

export default function UpdateRecipePage({params}: { params: { id: string } }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("/placeholder.svg?height=300&width=400");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([""]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes/' + params.id, {cache: 'no-store'})
      .then(response => {
        return response.json();
      }).then(recipe => {
        setName(recipe.name)
        setDescription(recipe.description)
        setImageUrl(recipe.imageUrl)
        setIngredients(recipe.ingredients)
        setInstructions(recipe.instructions)
      }
    )
  }, []);

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

    const response = await fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
    const recipe = await response.json();

    router.push("/recipes/" + recipe._id);
    router.refresh(); // TODO: revalidate home page recipe list after new recipe is added
  };

  return (<Box
    component="form"
    sx={{'& > :not(style)': {mt: 2}}}
    autoComplete="off"
    onSubmit={async (e) => await handleSubmit(e)}
  >
    <TextField
      required
      fullWidth
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <TextField
      label="Description"
      multiline
      fullWidth
      maxRows={4}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <IngredientMultiSelectionInput ingredients={ingredients}
                                   setIngredients={setIngredients}></IngredientMultiSelectionInput>
    <InstructionMultiInput instructions={instructions} setInstructions={setInstructions}></InstructionMultiInput>
    <div className="flex justify-center"><Button type="submit" variant="contained">Update Recipe</Button></div>
  </Box>)
}
