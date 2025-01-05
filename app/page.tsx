"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import RecipeCreator from "./components/RecipeCreator";
import LeftSideBar from "./components/LeftSideBar";
import RecipeList from "./components/RecipeList";
import RecipePage from "./recipe/[id]/page";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSideBar></LeftSideBar>

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        {isMobile && (
          <header className="sticky top-0 z-40 bg-white border-b">
            <div className="container px-4 h-14 flex items-center">
              <SidebarTrigger />
            </div>
          </header>
        )}
        {/* Main Content */}
        <main className="flex-1 flex overflow-hidden">
          {/* Recipe List Section - Fixed width on desktop */}
          <div className="w-full md:w-[400px] flex-shrink-0 border-r overflow-y-auto scrollbar-hide">
            <div className="p-4 space-y-4">
              <RecipeCreator />
              <RecipeList
                onSelectRecipe={(recipe) => {
                  setSelectedRecipe(recipe);
                  setIsSliderOpen(true);
                }}
              />
            </div>
          </div>
          {/* Recipe Details Section */}
          <div
            className={`
              fixed md:relative md:block
              inset-0 bg-white
              transform transition-transform duration-300 ease-in-out
              ${isSliderOpen ? "translate-x-0" : "translate-x-full"}
              md:transform-none
              flex-1 overflow-y-auto scrollbar-hide
              z-50 md:z-0
            `}
          >
            <div className="md:hidden absolute top-4 left-4">
              <button
                onClick={() => setIsSliderOpen(false)}
                className="p-2 rounded-full bg-gray-100"
              >
                ← Back
              </button>
            </div>
            <RecipePage params={{ id: selectedRecipe?.id ?? "" }} />
          </div>
        </main>
      </div>
    </div>
  );
}
