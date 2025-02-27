"use client";

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Minus, Plus} from "lucide-react";
import {Box, Button, IconButton, TextField, Typography} from "@mui/material";
import IngredientMultiSelectionInput from "@/app/components/IngredientMultiSelectionInput";

export default function UploadRecipePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("/placeholder.svg?height=300&width=400");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([
    {text: "", duration: ""},
  ]);

  useEffect(() => {
    const nameFromUrl = searchParams.get("name");
    if (nameFromUrl) {
      setName(decodeURIComponent(nameFromUrl));
    }
  }, [searchParams]);

  const handleInstructionChange = (
    index: number,
    field: "text" | "duration",
    value: string
  ) => {
    const newInstructions = [...instructions];
    newInstructions[index] = {...newInstructions[index], [field]: value};
    setInstructions(newInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, {text: "", duration: ""}]);
  };

  const removeInstruction = (index: number) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now().toString(),
      name,
      description,
      image,
      ingredients: ingredients.filter((i) => i.trim() !== ""),
      instructions: instructions
        .filter((i) => i.text.trim() !== "")
        .map((i) => ({
          text: i.text,
          duration: i.duration ? parseInt(i.duration) : undefined,
        })),
    };

    // Get existing recipes from local storage
    const existingRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");

    // Add new recipe
    const updatedRecipes = [...existingRecipes, newRecipe];

    // Save updated recipes to local storage
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    // Redirect to home page
    router.push("/");
  };

  return (
    <Box
      component="form"
      sx={{'& > :not(style)': {mt: 2}}}
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
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
      <IngredientMultiSelectionInput></IngredientMultiSelectionInput>
      <div>
        <Typography>Instructions</Typography>
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-center mt-2">
            <TextField multiline label={`Step ${index + 1}`} fullWidth
                       value={instruction.text}
                       onChange={(e) =>
                         handleInstructionChange(index, "text", e.target.value)
                       }/>
            <IconButton sx={{backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity, 1))", marginLeft: "1rem"}}
                        onClick={() => removeInstruction(index)}>
              <Minus size={16}/>
            </IconButton>
          </div>
        ))}
        <IconButton sx={{backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity, 1))", marginTop: "1rem"}}
                    onClick={addInstruction}>
          <Plus size={16}/>
        </IconButton>
      </div>
      <div className="flex justify-center"><Button size="large" variant="contained">Create Recipe</Button></div>
    </Box>
  );
}
