"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { recipes as initialRecipes } from "../../../data/recipes";
import Timer from "../../../components/Timer";

interface Instruction {
  text: string;
  duration?: number; // in minutes
}

interface Recipe {
  id: string;
  name: string;
  instructions: Instruction[];
  // Add other properties as needed
}

export default function CookingProgressPage({
  params,
}: {
  params: { id: string };
}) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    const allRecipes = [...initialRecipes, ...storedRecipes];
    const foundRecipe = allRecipes.find((r) => r.id === params.id);
    setRecipe(foundRecipe || null);

    const storedProgress = localStorage.getItem(`cookingProgress-${params.id}`);
    if (storedProgress) {
      setCompletedSteps(JSON.parse(storedProgress));
    }
  }, [params.id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const toggleStep = (index: number) => {
    const updatedSteps = completedSteps.includes(index)
      ? completedSteps.filter((step) => step !== index)
      : [...completedSteps, index];
    setCompletedSteps(updatedSteps);
    localStorage.setItem(
      `cookingProgress-${params.id}`,
      JSON.stringify(updatedSteps)
    );
  };

  const resetProgress = () => {
    setCompletedSteps([]);
    localStorage.removeItem(`cookingProgress-${params.id}`);
  };

  return (
    <div className="container mx-auto py-4 px-4 max-w-3xl">
      <Link
        href={`/recipe/${params.id}`}
        className="text-gray-600 hover:underline mb-4 inline-flex items-center"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to recipe
      </Link>
      <h1 className="text-3xl font-light mb-6">
        {recipe.name} - Cooking Progress
      </h1>
      <div className="mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-light mb-4">Instructions</h2>
          {recipe.instructions.map((instruction, index) => (
            <div key={index} className="flex items-start mb-4">
              <button
                onClick={() => toggleStep(index)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 mt-1 flex items-center justify-center ${
                  completedSteps.includes(index)
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
              >
                {completedSteps.includes(index) && (
                  <Check size={16} className="text-white" />
                )}
              </button>
              <div className="flex-grow">
                <p
                  className={`${
                    completedSteps.includes(index)
                      ? "line-through text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {instruction.text}
                </p>
                {instruction.duration && (
                  <div className="mt-2">
                    <Timer duration={instruction.duration * 60} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          {completedSteps.length} of {recipe.instructions.length} steps
          completed
        </p>
        <button
          onClick={resetProgress}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
}
