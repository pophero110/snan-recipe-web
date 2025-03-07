import RecipeCard from "./RecipeCard";
import {Grid2} from "@mui/material";
import {Recipe} from "@/app/types/recipe";

export default async function RecipeGrid() {
  const res = await fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes', { cache: 'no-store'})
  const recipes: Recipe[] = await res.json()
  return (
  <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2 }}>
    {recipes.map((recipe, index) => (
      <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <RecipeCard recipe={recipe}></RecipeCard>
      </Grid2>
    ))}
  </Grid2>);
}
