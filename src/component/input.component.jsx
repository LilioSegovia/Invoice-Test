import { Grid, Typography } from "@mui/material";
import * as React from 'react';

export default function InputTest ({clientName}) {
    return (
        <Grid>
          <Typography>
            <Typography>ClientName</Typography>{clientName}
          </Typography>
        </Grid>
    )
}