import "./globals.css";
import {Inter} from "next/font/google";
import "@copilotkit/react-ui/styles.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {Container} from "@mui/material";
import MenuBar from "./components/MenuBar";

const inter = Inter({subsets: ["latin"]});

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
    <body className={`${inter.className} bg-gray-200`}>
    {/*https://mui.com/material-ui/integrations/nextjs/*/}
    <AppRouterCacheProvider>
      <MenuBar></MenuBar>
      <Container className={"pt-4 min-h-screen bg-white shadow"}>{children}</Container>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
