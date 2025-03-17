import Link from "next/link";
import {Grid2, Stack} from "@mui/material";
import DataCard from "@/app/components/DataCard";

export default function Home() {

  return (
    <Grid2 container spacing={{xs: 2, md: 2}} columns={{xs: 4}}>
      <Grid2 size={{xs: 2, sm: 2, md: 2}}><Link href={"/recipes"}><DataCard title={"Recipes"}></DataCard></Link></Grid2>
      <Grid2 size={{xs: 2, sm: 2, md: 2}}><Link href={"/ingredients"}><DataCard title={"Ingredients"}></DataCard></Link></Grid2>
      <Grid2 size={{xs: 2, sm: 2, md: 2}}><Link href={"/inventory"}><DataCard title={"Inventory"}></DataCard></Link></Grid2>
      <Grid2 size={{xs: 2, sm: 2, md: 2}}><Link href={"/shopping-list"}><DataCard title={"Shopping List"}></DataCard></Link></Grid2>
    </Grid2>
  );
}