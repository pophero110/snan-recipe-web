"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Clock, Users} from "lucide-react";
import { Stack, Typography} from "@mui/material";
import IngredientList from "@/app/components/IngredientList";
import InstructionList from "@/app/components/InstructionList";
import IconText from "@/app/components/IconText";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Recipe} from "@/app/types/recipe";

export default function RecipePage({params}: { params: { id: string } }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes/' + params.id, { cache: 'no-store'})
      .then(response => response.json())
      .then(recipe => setRecipe(recipe))
  }, []);

  if (!recipe) {
    return <div>404</div>;
  }

  function handleDelete() {
    const isApproved = confirm("Are you sure to delete this recipe?")
    if (isApproved) {
      fetch(process.env.NEXT_PUBLIC_SNAN_RECIPE_API_URL + '/recipes/' + params.id, {
        method: "DELETE"
      }).then(response => {
        router.push("/recipes")
        router.refresh()
      })
    }
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant={"h3"}>{recipe.name}</Typography>
          <Stack direction={"row"} gap={"16px"}>
            <Link href={"/updateRecipe/" + recipe._id}>
              <EditIcon color={"primary"}></EditIcon>
            </Link>
            <DeleteIcon onClick={() => handleDelete()} color={"error"} className={"cursor-pointer"}/>
          </Stack>
        </Stack>
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
