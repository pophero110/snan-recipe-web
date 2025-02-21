"use client";

import {recipes} from "../data/recipes";
import {useRouter} from "next/navigation";
import RecipeCard from "./RecipeCard";
import {Grid2} from "@mui/material";

export default function RecipeList() {
  const router = useRouter();

  function onSelectRecipe(recipeId: string): void {
    router.push(`/recipes/${recipeId}`);
  }

  return (
  <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {recipes.map((recipe, index) => (
      <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <RecipeCard recipe={recipe} onSelectRecipe={() => onSelectRecipe(recipe.id)}></RecipeCard>
      </Grid2>
    ))}
  </Grid2>);
}
