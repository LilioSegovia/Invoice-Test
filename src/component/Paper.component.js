import { TextField} from "@mui/material";
import * as React from 'react';
import { Paper, SxProps } from '@mui/material';



// Page size.
const ACTUALLY_PAPER_SIZE = {
  width: '210mm',
  height: '297mm',
};

const InvoicePaper = ({ children }) => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', md: ACTUALLY_PAPER_SIZE.width },
        minHeight: { xs: 'unset', md: ACTUALLY_PAPER_SIZE.height },
      }}
    >
      {children}
    </Paper>
  );
};

export default InvoicePaper;