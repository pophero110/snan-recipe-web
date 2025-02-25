import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function InstructionList({instructions}: { instructions: string[] }) {

  return (
        <List dense disablePadding>
          {instructions.map((instruction, index) => (
            <ListItem key={instruction}>
              <ListItemText
                primary={(index + 1) + ". " + instruction}
              />
            </ListItem>
          ))}
        </List>
  );
}
