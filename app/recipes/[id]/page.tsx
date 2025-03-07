import React from "react";
import {Clock, Users} from "lucide-react";
import {Recipe} from "@/app/types/recipe";
import {Stack, Typography} from "@mui/material";
import IngredientList from "@/app/components/IngredientList";
import InstructionList from "@/app/components/InstructionList";
import IconText from "@/app/components/IconText";

export default async function RecipePage({params}: { params: { id: string } }) {
  const res = await fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes/' + params.id, { cache: 'no-store'})
  const recipe: Recipe = await res.json()

  if (!recipe) {
    return <div>404</div>;
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography variant={"h3"}>{recipe.name}</Typography>
        <Typography variant={"body1"}>{recipe.description}</Typography>
        <Stack spacing={2} direction="row">
          <IconText icon={<Clock size={16}/>} text={recipe.cookTimeInMin + " mins"}></IconText>
          <IconText icon={<Users size={16}/>} text={recipe.servings + " servings"}></IconText>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant={"h5"}>Ingredients</Typography>
        <IngredientList ingredients={recipe.ingredients}></IngredientList>
      </Stack>
      <Stack>
        <Typography variant={"h5"}>Instructions</Typography>
        <InstructionList instructions={recipe.instructions}></InstructionList>
      </Stack>
    </Stack>
  );
}
