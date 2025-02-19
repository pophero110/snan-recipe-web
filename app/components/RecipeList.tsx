"use client";

import { recipes } from "../data/recipes";
import { useRouter } from "next/navigation";

export default function RecipeList() {
  const router = useRouter();

  function onSelectRecipe(recipe: {
    id: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    cookTime: number;
    servings: number;
  }): void {
    router.push(`/recipes/${recipe.id}`);
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {recipes.map((recipe) => (
        <div
          onClick={() => onSelectRecipe(recipe)}
          className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-light mb-2">{recipe.name}</h2>
            <p className="text-gray-600 text-sm">{recipe.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              {recipe.ingredients.length} ingredients | {recipe.cookTime} mins
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
