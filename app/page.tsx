import Link from "next/link";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import { ShoppingBag, PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl">
      <RecipeList />
    </main>
  );
}
