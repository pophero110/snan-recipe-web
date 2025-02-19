"use client";

import { useState, useEffect } from "react";
import { recipes } from "../../data/recipes";
import Link from "next/link";
import { Clock, Users, Plus, Check, PlayCircle } from "lucide-react";

export default function RecipePage({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<any>(null);
  const [addedIngredients, setAddedIngredients] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const recipe = recipes.find((r) => r.id === params.id);
    setRecipe(recipe);
  }, [params.id]);

  if (!recipe) {
    return <div></div>;
  }

  return (
    <div className="px-4">
      <div className="w-full mt-4">
        <h1 className="text-2xl font-light mb-4">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover mb-6"
        />
        <p className="text-gray-600 mb-6">{recipe.description}</p>
        <div className="flex justify-between mb-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{recipe.cookTime} mins</span>
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
              <button
                onClick={() => addToShoppingList(ingredient, index)}
                className="text-gray-400 hover:text-gray-600"
                disabled={addedIngredients.has(index)}
              >
                {addedIngredients.has(index) ? (
                  <Check size={18} className="text-green-500" />
                ) : (
                  <Plus size={18} />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 mb-6">
          <Link
            href="/shopping-list"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors inline-block"
          >
            View Shopping List
          </Link>
          <Link
            href={`/recipe/${recipe.id}/progress`}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors inline-flex items-center"
          >
            <PlayCircle size={18} className="mr-2" />
            Start Cooking
          </Link>
        </div>
        <h2 className="text-xl font-light mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2 text-gray-600">
              {instruction.text}
              {instruction.duration && (
                <span className="ml-2 text-sm text-gray-500">
                  ({instruction.duration} min)
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
