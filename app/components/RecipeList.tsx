'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes as initialRecipes } from '../data/recipes'

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes)

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]')
    setRecipes([...initialRecipes, ...storedRecipes])
  }, [])

  return (
    <div className="grid grid-cols-1 gap-8">
      {recipes.map((recipe) => (
        <Link href={`/recipe/${recipe.id}`} key={recipe.id} className="block">
          <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
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
        </Link>
      ))}
    </div>
  )
}

