"use client";

import React, {useEffect, useState} from "react";
import {recipes} from "../../data/recipes";
import {Clock, Users} from "lucide-react";
import {Recipe} from "@/app/types/recipe";
import IngredientList from "@/app/components/IngredientList";
import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export default function RecipePage({params}: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  useEffect(() => {
    const recipe: Recipe | undefined = recipes.find((r) => r.id === params.id);
    setRecipe(recipe);
  }, [params.id]);
  if (!recipe) {
    return <div>404</div>;
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography variant={"h3"}>{recipe.name}</Typography>
        <Typography variant={"body1"}>{recipe.description}</Typography>
        <div className="flex justify-between mb-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-2"/>
            <span>{recipe.cookTimeInMin} mins</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2"/>
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </Stack>
      <Stack spacing={2}>
        <Typography variant={"h5"}>Ingredients</Typography>
        <IngredientList ingredients={recipe.ingredients}></IngredientList>
      </Stack>
      <Stack spacing={2}>
        <Typography variant={"h5"}>Instruction</Typography>
        <ol className="list-decimal list-inside space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2 text-gray-600">
              {instruction}
            </li>
          ))}
        </ol>
      </Stack>
    </Stack>
  );
}
