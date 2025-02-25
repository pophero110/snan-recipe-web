"use client";

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function IngredientTable({ingredients}: { ingredients: string[] }) {

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <TableRow
              key={ingredient}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {ingredient}
              </TableCell>
              <TableCell align="right">{12}</TableCell>
              <TableCell align="right">{10}</TableCell>
              <TableCell align="right">{14}</TableCell>
              <TableCell align="right">{10}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">{12}</TableCell>
            <TableCell align="right">{10}</TableCell>
            <TableCell align="right">{14}</TableCell>
            <TableCell align="right">{10}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

}
