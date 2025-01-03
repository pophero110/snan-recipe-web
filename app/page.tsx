import Link from 'next/link'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'
import { ShoppingBag, PlusCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light">
          Minimalist Recipes
        </h1>
        <div className="flex space-x-4">
          <Link href="/shopping-list" className="text-gray-600 hover:text-gray-800">
            <ShoppingBag size={24} />
          </Link>
          <Link href="/upload" className="text-gray-600 hover:text-gray-800">
            <PlusCircle size={24} />
          </Link>
        </div>
      </div>
      <SearchBar />
      <RecipeList />
    </main>
  )
}

