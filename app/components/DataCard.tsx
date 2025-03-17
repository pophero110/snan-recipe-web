import {Avatar, Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import { red } from "@mui/material/colors";
import {MoreVerticalIcon} from "lucide-react";

export default function DataCard({title}:{title:string}) {
  return (
    <Card>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVerticalIcon />
        //   </IconButton>
        // }
        title= {title}
        subheader="12,000"
      />
      {/*<CardContent>*/}
      {/*</CardContent>*/}
    </Card>
  );
}