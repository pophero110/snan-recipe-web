import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Recipe} from '../types/recipe';
import {CardMedia, Stack} from "@mui/material";
import IconText from "@/app/components/IconText";
import {Clock, Users} from "lucide-react";
import Link from 'next/link';

export default function RecipeCard({recipe}:{recipe: Recipe}){
  return (
    <Link href={`/recipes/${recipe._id}`}>
      <Card className={"flex"}>
        <CardMedia sx={{width: 180, height: 180}} image={recipe.imageUrl}></CardMedia>
        <CardContent className={"flex flex-col justify-between"}>
          <Stack spacing={2} direction="row" sx={{mb: 1.5}} >
            <Typography variant="h5" component="div">
              {recipe.name}
            </Typography>
            <IconText icon={<Clock size={16}/>} text={recipe.cookTimeInMin + " mins"}></IconText>
            <IconText icon={<Users size={16}/>} text={recipe.servings + " servings"}></IconText>
          </Stack>
          <Typography variant="body2">
            {recipe.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
