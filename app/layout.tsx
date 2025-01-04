import "./globals.css";
import { Inter } from "next/font/google";
import "@copilotkit/react-ui/styles.css";
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
import { Home, BookOpen, ShoppingCart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalist Recipes",
  description:
    "A clean and simple mobile recipe web app with shopping list and cooking progress features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <SidebarProvider defaultOpen={false}>
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
                        <Home size={20} />
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
                      <Link
                        href="/shopping"
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart size={20} />
                        <span>Shopping List</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <div className="flex-1 flex flex-col min-h-[100dvh]">
              <header className="sticky top-0 z-40 bg-white border-b px-4 h-14 flex items-center">
                <SidebarTrigger className="md:hidden" />
                <h1 className="ml-4 text-lg font-medium">Minimalist Recipes</h1>
              </header>
              <SearchBar />
              <main className="flex-grow p-4">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
