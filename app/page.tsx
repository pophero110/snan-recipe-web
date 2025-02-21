"use client";

import RecipeList from "./components/RecipeList";
import { Container } from "@mui/material";

export default function Home() {

  return (
    <Container className={"pt-4"}>
      <RecipeList />
    </Container>
  );
}
