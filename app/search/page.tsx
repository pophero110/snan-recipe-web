import { recipes } from '../data/recipes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q?.toLowerCase() || ''
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query)
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/" className="text-gray-600 hover:underline mb-4 inline-flex items-center">
        <ArrowLeft size={20} className="mr-2" />
        Back to recipes
      </Link>
      <h1 className="text-3xl font-light mb-6">Search Results for "{query}"</h1>
      {filteredRecipes.length === 0 ? (
        <p className="text-gray-600">No recipes found. Try another search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {filteredRecipes.map((recipe) => (
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
      )}
    </div>
  )
}

