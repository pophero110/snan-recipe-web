"use client";

import { useState } from "react";
import RecipeCreator from "./components/RecipeCreator";
import RecipeList from "./components/RecipeList";
import RecipePage from "./recipes/[id]/page";
import ShoppingListPage from "./shopping-list/page";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <RecipeList />
    </div>
  );
}
