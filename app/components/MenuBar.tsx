import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";

export default function MenuBar() {
  return (
    <Box sx={{flexGrow: 1, backgroundColor:"white"}}>
      <AppBar color="transparent" position="sticky">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              <Link href="/">RecipeCraft</Link>
            </Typography>
          <Link href="/newRecipe"><Button color="inherit">Create Recipe</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
