"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mx-4 my-2">
      <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="w-full px-4 py-2.5 bg-transparent text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}
