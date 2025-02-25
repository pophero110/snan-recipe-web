import {Stack, Typography} from "@mui/material";
import React, { ReactNode } from "react";

export default function IconText({icon, text}: { icon: ReactNode, text: string }) {
  return (
    <Stack sx={{alignItems: "center"}} spacing={1} direction="row">
      {icon}
      <Typography sx={{fontSize: "14"}} color="textSecondary">{text}</Typography>
    </Stack>
  )
}