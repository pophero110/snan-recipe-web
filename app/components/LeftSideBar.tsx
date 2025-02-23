import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ShoppingCart, Heart } from "lucide-react";

export default function LeftSdieBar() {
  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
      className="overflow-y-auto scrollbar-hide"
    >
      <SidebarHeader className="py-2 px-4">
        <h2 className="text-lg font-semibold">Snan Recipes</h2>
      </SidebarHeader>
      <SidebarSeparator className="mt-2 mb-4"></SidebarSeparator>
      <SidebarContent className="px-2">
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  <span>Grocery List</span>
                </div>
                <Badge className="bg-gray-300">0</Badge>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Heart />
                  <span>Favourite Recipes</span>
                </div>
                <Badge className="bg-gray-300">0</Badge>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarSeparator className="mt-2 mb-4"></SidebarSeparator>
          <SidebarMenuItem>
            <div className="px-2">
              <div className="text-gray-400 text-sm mb-4">Recent Recipes</div>
              <div className="flex flex-col gap-2 text-gray-600">
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
                <div>Spahetti Carbonara</div>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
