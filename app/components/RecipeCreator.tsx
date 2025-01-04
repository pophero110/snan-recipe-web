import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Recipe = {
  name: string;
  ingredients?: string[];
  steps?: string[];
  source?: string; // Link to a recipe source (e.g., YouTube, TikTok, Article)
};

const RecipeCreator: React.FC = () => {
  const [input, setInput] = useState<string>(""); // User input for name or link
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Created recipe
  const [error, setError] = useState<string>(""); // Error message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(""); // Clear errors when user types
  };
  const router = useRouter();
  const handleCreateRecipe = () => {
    const urlRegex = /^(https?:\/\/[^\s]+)/;
    if (urlRegex.test(input)) {
      // Handle link-based recipe
      handleLinkInput(input);
    } else if (input.trim()) {
      // Redirect to upload page with recipe name
      router.push(`/upload?name=${encodeURIComponent(input.trim())}`);
    } else {
      setError("Please enter a recipe name or a valid link.");
    }
  };

  const handleLinkInput = (link: string) => {
    // Simulate extracting data from a link (this would be replaced with real API logic)
    if (link.includes("youtube")) {
      setRecipe({
        name: "Extracted Recipe from YouTube",
        source: link,
        ingredients: ["Ingredient 1", "Ingredient 2"],
        steps: ["Step 1", "Step 2"],
      });
    } else if (link.includes("tiktok")) {
      setRecipe({
        name: "Extracted Recipe from TikTok",
        source: link,
        ingredients: ["Ingredient A", "Ingredient B"],
        steps: ["Step A", "Step B"],
      });
    } else {
      setError("This link is not supported.");
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Enter recipe name or paste a link"
        value={input}
        onChange={handleInputChange}
        className="w-full p-3 border border-gray-300 rounded mb-3 text-lg focus:outline-none focus:ring focus:ring-green-300"
      />
      <button
        onClick={handleCreateRecipe}
        className="w-full py-3 text-lg bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Create Recipe
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {recipe && (
        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          {recipe.source && (
            <p className="text-blue-500 mt-2">
              Source:{" "}
              <a href={recipe.source} target="_blank" rel="noopener noreferrer">
                {recipe.source}
              </a>
            </p>
          )}
          {recipe.ingredients && (
            <>
              <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
              <ul className="list-disc list-inside mt-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}
          {recipe.steps && (
            <>
              <h3 className="text-lg font-semibold mt-4">Steps</h3>
              <ol className="list-decimal list-inside mt-2">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeCreator;
