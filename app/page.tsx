"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import RecipeList from "./components/RecipeList";
import { Cookie, Heart, PlusCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RecipeCreator from "./components/RecipeCreator";

export default function Home() {
  const [recipeName, setRecipeName] = useState("");
  return (
    <div className="flex min-h-[100dvh]">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader className="p-4">
          <h2 className="text-lg font-semibold">Snan Recipes</h2>
        </SidebarHeader>
        <SidebarSeparator className="mt-2 mb-4"></SidebarSeparator>
        <SidebarContent>
          <SidebarMenu className="space-y-2">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/shopping-list"
                  className="flex p-4 items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingCart />
                    <span>Shopping List</span>
                  </div>
                  <Badge>0</Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/shopping-list"
                  className="flex p-4 items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <Heart />
                    <span>Favourite Recipes</span>
                  </div>
                  <Badge>0</Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarSeparator className="mt-2 mb-4"></SidebarSeparator>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/shopping-list"
                  className="flex p-4 items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <Cookie />
                    <span>Recent Recipes</span>
                  </div>
                  <Badge>0</Badge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col min-h-[100dvh]">
        <header className="sticky top-0 z-40 bg-white px-4 h-14 flex items-center justify-between">
          <SidebarTrigger />
        </header>
        <main className="flex flex-col gap-4 flex-grow px-4 py-2">
          <RecipeCreator></RecipeCreator>
          <RecipeList />
        </main>
      </div>
    </div>
  );
}
