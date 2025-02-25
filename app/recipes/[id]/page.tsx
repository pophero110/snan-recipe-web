"use client";

import React, {useEffect, useState} from "react";
import {recipes} from "../../data/recipes";
import {Clock, Users} from "lucide-react";
import {Recipe} from "@/app/types/recipe";
import IngredientTable from "@/app/components/IngredientTable";
import {Box, Divider, Stack, Typography, useTheme} from "@mui/material";
import IngredientList from "@/app/components/IngredientList";
import InstructionList from "@/app/components/InstructionList";
import IconText from "@/app/components/IconText";

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
        {/*<IngredientTable ingredients={recipe.ingredients}></IngredientTable>*/}
        <IngredientList ingredients={recipe.ingredients}></IngredientList>
      </Stack>
      <Stack>
        <Typography variant={"h5"}>Instructions</Typography>
        <InstructionList instructions={recipe.instructions}></InstructionList>
      </Stack>
    </Stack>
  );
}
