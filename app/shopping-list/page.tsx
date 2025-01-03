'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trash2 } from 'lucide-react'

export default function ShoppingListPage() {
  const [shoppingList, setShoppingList] = useState<string[]>([])

  useEffect(() => {
    const storedList = localStorage.getItem('shoppingList')
    if (storedList) {
      setShoppingList(JSON.parse(storedList))
    }
  }, [])

  const removeItem = (index: number) => {
    const newList = shoppingList.filter((_, i) => i !== index)
    setShoppingList(newList)
    localStorage.setItem('shoppingList', JSON.stringify(newList))
  }

  const clearList = () => {
    setShoppingList([])
    localStorage.removeItem('shoppingList')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/" className="text-gray-600 hover:underline mb-4 inline-flex items-center">
        <ArrowLeft size={20} className="mr-2" />
        Back to recipes
      </Link>
      <h1 className="text-3xl font-light mb-6">Shopping List</h1>
      {shoppingList.length === 0 ? (
        <p className="text-gray-600">Your shopping list is empty.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-6">
            {shoppingList.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-white p-3 shadow-sm">
                <span>{item}</span>
                <button onClick={() => removeItem(index)} className="text-gray-400 hover:text-gray-600">
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearList}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Clear List
          </button>
        </>
      )}
    </div>
  )
}

