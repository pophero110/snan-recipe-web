import "./globals.css";
import { Inter } from "next/font/google";
import "@copilotkit/react-ui/styles.css";
import { SidebarProvider } from "@/components/ui/sidebar";
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
      <body className={`${inter.className} max-h-screen`}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
