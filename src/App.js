import {
  Button,
  TextField,
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  InputAdornment,
  InputBase,
} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { v4 as uuidv4 } from "uuid";

import { useState, useRef } from "react";

import InvoicePreview from "./component/invoice.Preview";
import ReactToPrint from "react-to-print";

const paperStyle = {
  width: "210mm",
  height: "297mm",
};

const defaultFormFields = {
  invoiceFrom: "",
  billTo: "",
  shipTo: "",
  paymentTerms: "",
  poNumber: "",
  invoiceNumber: "",
  terms: "",
  notes: "",
  subtotal: "",
  tax: "",
  total: "",
  amountPaid: "",
  balanceDue: "",
};

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [date, setDate] = React.useState();
  const [dueDate, setDueDate] = React.useState();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), item: "", quantity: "", rate: "", amount: "" },
  ]);
  const handleDate = (newDate) => {
    let formattedDate = JSON.stringify(newDate)
    setDate(formattedDate)
  };
  const handleDueDate = (newDueDate) => {
    let formattedDueDate = JSON.stringify(newDueDate)
    setDueDate(formattedDueDate);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), item: "", quantity: "", rate: "", amount: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    invoiceFrom,
    billTo,
    shipTo,
    paymentTerms,
    poNumber,
    invoiceNumber,
    terms,
    notes,
    subtotal,
    tax,
    total,
    amountPaid,
    balanceDue,
  } = formFields;

  const componentRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div mt={2}>
      {showInvoice ? (
        <div ref={componentRef}>
          <Container>
            <Grid container>
              <Box sx={{ flexGrow: 1 }}>
                <Grid item>
                  <Paper style={paperStyle}>
                    <InvoicePreview
                      billTo={billTo}
                      inputFields={inputFields}
                      paymentTerms={paymentTerms}
                      shipTo={shipTo}
                      poNumber={poNumber}
                      invoiceNumber={invoiceNumber}
                      terms={terms}
                      notes={notes}
                      subtotal={subtotal}
                      tax={tax}
                      total={total}
                      amountPaid={amountPaid}
                      balanceDue={balanceDue}
                      date={date}
                      dueDate={dueDate}
                    />
                  </Paper>
                </Grid>
              </Box>
              <Grid item>
                <Box sx={{ displayPrint: "none" }}>
                  <Button
                    variant="contained"
                    onClick={() => setShowInvoice(false)}
                  >
                    Edit
                  </Button>
                  <ReactToPrint
                    trigger={() => <Button variant="contained">Print</Button>}
                    content={() => componentRef.current}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <Paper elevation={8}>
              <Box sx={{ flexGrow: 1 }} mt={3}>
                <Grid container>
                  <Grid item mb={3} ml={3} justify="flex-end" mt={20}>
                    <TextField
                      label="Invoice From"
                      type="text"
                      onChange={handleChange}
                      name="invoiceFrom"
                      value={invoiceFrom}
                      variant="outlined"
                      required
                      id="invoiceFrom"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    justify="flex-end"
                    sx={{ ml: "auto", mt: "auto" }}
                  >
                    <Typography variant="h3" sx={{ ml: 4 }}>
                      {" "}
                      INVOICE
                    </Typography>
                    <TextField
                      size="small"
                      name="invoiceNumber"
                      value={invoiceNumber}
                      onChange={handleChange}
                      id="invoiceNumber"
                      sx={{ width: 235 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">#</InputAdornment>
                        ),
                      }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      
                      <DatePicker
                      views={['day']}
                      helperText={null} 
                        label="Date"
                        value={date}
                        onChange={(newDate) => handleDate(newDate)}
                        renderInput={(params) => (
                          <TextField
                            sx={{ width: 235, mt: 1 }}
                            size="small"
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>

                    <TextField
                      label="PaymentTerms"
                      type="text"
                      id="paymenTerms"
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
                  <Grid item xs={7} pl={3} justify="flex-start">
                    <TextField
                      label="Bill To"
                      type="text"
                      onChange={handleChange}
                      name="billTo"
                      id="billTo"
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
                      name="shipTo"
                      id="shipTo"
                      value={shipTo}
                      variant="outlined"
                      sx={{ width: 160, ml: 2 }}
                      rows={2}
                      multiline
                    />
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    mt={1}
                    justify="flex-end"
                    sx={{ ml: "auto" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                      views={['day']}
                      helperText={null} 
                        label="Due Date"
                        value={dueDate}
                        onChange={(newDueDate) => handleDueDate(newDueDate)}
                        renderInput={(params) => (
                          <TextField
                            sx={{ width: 235, mt: 1 }}
                            size="small"
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    <TextField
                      label="PoNumber"
                      type="text"
                      id="poNumber"
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
                  <Grid item>{/*Placeholder Table */}</Grid>
                </Grid>
                <Grid container mt={1}>
                  <Grid item pl={3}>
                    <TextField
                      size="small"
                      defaultValue="Item"
                      variant="outlined"
                      sx={{ width: 600 }}
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      defaultValue="Quantity"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      defaultValue="Rate"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      defaultValue="Amount"
                    />
                  </Grid>
                  <Grid item pl={3} mt={1}>
                    <form onSubmit={handleSubmit}>
                      {inputFields.map((inputField) => (
                        <div key={inputField.id}>
                          <TextField
                            placeholder="Description of Service of product"
                            size="small"
                            type="text"
                            name="item"
                            value={inputField.item}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                            sx={{ width: 600 }}
                          />

                          <TextField
                            size="small"
                            type="text"
                            name="quantity"
                            sx={{ width: 130 }}
                            value={inputField.quantity}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                          />

                          <TextField
                            size="small"
                            type="text"
                            name="rate"
                            sx={{ width: 130 }}
                            value={inputField.rate}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            }}
                          />

                          <TextField
                            size="small"
                            type="text"
                            name="amount"
                            sx={{ width: 130 }}
                            value={inputField.amount}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                          />
                          <IconButton
                            disabled={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <IconButton onClick={handleAddFields}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      ))}
                    </form>
                  </Grid>
                </Grid>
                <Grid pl={3}></Grid>
                <Grid container mt={5}>
                  <Grid item xs={7} mt={2.5} ml={3} mb={10}>
                    <InputBase id="Notes" label="Notes" placeholder="Notes" />
                    <TextField
                      justify="flex-start"
                      rows={2}
                      sx={{ width: 540, mt: 1 }}
                      multiline
                      label="Notes - any revelant Information not already covered"
                      name="notes"
                      id="notes"
                      value={notes}
                      onChange={handleChange}
                    />
                    <InputBase
                      id="Terms"
                      label="Terms"
                      placeholder="Terms"
                      sx={{ mt: 5 }}
                    />
                    <TextField
                      justify="flex-start"
                      rows={2}
                      sx={{ width: 540, mt: 1 }}
                      multiline
                      label="Term and conditions - late fees, payment methonds,delivery schedule"
                      name="terms"
                      id="terms"
                      value={terms}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={4} justify="flex-end" mt={1}>
                    <InputBase
                      placeholder="Subtotal"
                      sx={{ width: 100, mt: 1.5 }}
                    />
                    <TextField
                      size="small"
                      sx={{ mt: 1 }}
                      id="subtotal"
                      name="subtotal"
                      value={subtotal}
                      onChange={handleChange}
                    />
                    <InputBase placeholder="Tax" sx={{ width: 100, mt: 1.5 }} />
                    <TextField
                      size="small"
                      sx={{ mt: 1 }}
                      name="tax"
                      id="tax"
                      value={tax}
                      onChange={handleChange}
                    />
                    <InputBase
                      placeholder="Total"
                      sx={{ width: 100, mt: 1.5 }}
                    />
                    <TextField
                      size="small"
                      sx={{ mt: 1 }}
                      name="total"
                      id="total"
                      value={total}
                      onChange={handleChange}
                    />
                    <InputBase
                      placeholder="Amount Paid"
                      sx={{ width: 100, mt: 1.5 }}
                    />
                    <TextField
                      size="small"
                      sx={{ mt: 1 }}
                      name="amountPaid"
                      id="amountPaid"
                      value={amountPaid}
                      onChange={handleChange}
                    />
                    <InputBase
                      placeholder="Balance Due"
                      sx={{ width: 100, mt: 1.5 }}
                    />
                    <TextField
                      size="small"
                      sx={{ mt: 1 }}
                      name="balanceDue"
                      id="balanceDue"
                      value={balanceDue}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Button
                sx={{ mb: 10, ml: 3 }}
                variant="contained"
                onClick={() => setShowInvoice(true)}
              >
                Preview
              </Button>
            </Paper>
          </Container>
          <Grid mb={10}></Grid>
        </div>
      )}
    </div>
  );
}

export default App;
