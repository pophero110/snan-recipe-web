'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-600 text-lg bg-transparent"
      />
      <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Search className="text-gray-400 hover:text-gray-600" size={20} />
      </button>
    </form>
  )
}

