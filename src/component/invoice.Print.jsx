import { useState } from "react";
import {
  TextField,
  Link,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputBase,
  Input
} from "@mui/material";
import {
  Box,
  Button,
  Paper,
  Typography,
  Grid,
  Container,
  InputLabel,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import * as React from "react";
import { display } from "@mui/system";

const defaultFormFields = {
  invoiceFrom: "",
  billTo: "",
  shipTo: "",
  date: "",
  paymentTerms: "",
  dueDate: "",
  poNumber: "",
  invoiceNumber: "",
};
const paperpdf = {
  size:"A4",
  margin:"0 auto"
}

const InvoiceTextField = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    invoiceFrom,
    billTo,
    shipTo,
    date,
    paymentTerms,
    dueDate,
    poNumber,
    invoiceNumber,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  function TopRight() {
    return <React.Fragment></React.Fragment>;
  }
  function TopLeft() {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <form>
      <Box style>
        <Grid container>
          <Grid item xs={7} justify="flex-end" mt={20}>
            <InputBase
              label="Invoice From"
              type="text"
              onChange={handleChange}
              name="invoice From"
              value={invoiceFrom}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={3} justify="flex-end" sx={{ ml: "auto", mt: "auto" }}>
            <Typography variant="h3" sx={{ ml: auto }}>
              {" "}
              INVOICE
            </Typography>
            <TextField
              sx={100}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">#</InputAdornment>
                ),
              }}
            />

            <TextField
              label="Date"
              type="text"
              onChange={handleChange}
              name="date"
              value={date}
              size="small"
              sx={{ mt: 1 }}
            />

            <TextField
              label="PaymentTerms"
              type="text"
              onChange={handleChange}
              name="paymentTerms"
              value={paymentTerms}
              variant="outlined"
              margin="none"
              size="small"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>
        <Grid container></Grid>
        <Grid container>
          <Grid item mt={5} xs={7} justify="flex-start">
            <TextField
              label="Bill To"
              type="text"
              onChange={handleChange}
              name="bill To"
              value={billTo}
              variant="outlined"
              sx={{ width: 160 }}
              required
              rows={2}
              multiline
            />
            <TextField
              label="Ship To"
              type="text"
              onChange={handleChange}
              name="ship To"
              value={shipTo}
              variant="outlined"
              sx={{ width: 160, ml: 2 }}
              rows={2}
              multiline
            />
          </Grid>
          <Grid item xs={3} mt={1} justify="flex-end" sx={{ ml: "auto" }}>
            <TextField
              label="DueDate"
              type="text"
              onChange={handleChange}
              name="dueDate"
              value={dueDate}
              variant="outlined"
              margin="none"
              size="small"
            />

            <TextField
              label="PoNumber"
              type="text"
              onChange={handleChange}
              name="poNumber"
              value={poNumber}
              variant="outlined"
              margin="none"
              size="small"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item>
            <TextField  size="small" sx label="Item" sx={{ width: 490}} ></TextField>
            <TextField size="small" sx label="Quantity" sx={{ width: 150}}>Quantity</TextField>
            <TextField size="small" sx label="Rate" sx={{ width: 150}}>Rate</TextField>
            <TextField size="small" sx label="Amount" sx={{ width: 150}}>Amount</TextField>
          </Grid>
        </Grid>
        <Grid container mt={1}>
          <Grid item>
          <TextField  size="small"   sx={{ width: 490}} ></TextField>
            <TextField size="small"  sx={{ width: 150}}>Quantity</TextField>
            <TextField size="small"   sx={{ width: 150}}>Rate</TextField>
            <TextField size="small"  sx={{ width: 150}}>Amount</TextField>
          </Grid>
        </Grid>
        <Button variant="contained">+ Line Item</Button>
      </Box>
    </form>
  );
};

export default InvoiceTextField;
