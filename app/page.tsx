import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import RecipeList from "./components/RecipeList";
import { Link, BookOpen, ShoppingCart } from "lucide-react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh]">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader className="border-b p-4">
          <h2 className="text-lg font-semibold">Minimalist Recipes</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" className="flex items-center gap-2">
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/recipes" className="flex items-center gap-2">
                  <BookOpen size={20} />
                  <span>Recipes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/shopping" className="flex items-center gap-2">
                  <ShoppingCart size={20} />
                  <span>Shopping List</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col min-h-[100dvh]">
        <header className="sticky top-0 z-40 bg-white px-2 h-14 flex items-center justify-between">
          <SidebarTrigger className="md:hidden" />
          <SearchBar />
        </header>
        <main className="flex-grow p-4">
          <RecipeList />
        </main>
      </div>
    </div>
  );
}
