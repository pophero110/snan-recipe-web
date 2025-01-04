import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import RecipeList from "./components/RecipeList";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./components/SearchBar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh]">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader className="p-4">
          <h2 className="text-lg font-semibold">Snan Recipes</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
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
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col min-h-[100dvh]">
        <header className="sticky top-0 z-40 bg-white px-4 h-14 flex items-center justify-between">
          <SidebarTrigger />
          <SearchBar />
        </header>
        <main className="flex-grow px-4 py-2">
          <RecipeList />
        </main>
      </div>
    </div>
  );
}
