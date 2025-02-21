"use client";

import { useState, useEffect } from "react";
import { recipes } from "../../data/recipes";
import { Clock, Users } from "lucide-react";
import { Recipe } from "@/app/types/recipe";

export default function RecipePage({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    const recipe: Recipe | undefined = recipes.find((r) => r.id === params.id);
    setRecipe(recipe);
  }, [params.id]);

  if (!recipe) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col justify-center w-full p-4">
        <h1 className="text-2xl font-light mb-4">{recipe.name}</h1>
        <p className="text-gray-600 mb-6">{recipe.description}</p>
        <div className="flex justify-between mb-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{recipe.cookTimeInMin} mins</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        <h2 className="text-xl font-light mb-2">Ingredients</h2>
        <ul className="list-none mb-6 space-y-2">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-3 shadow-sm"
            >
              <span className="text-gray-600">{ingredient}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-light mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2 text-gray-600">
              {instruction}
            </li>
          ))}
        </ol>
    </div>
  );
}
