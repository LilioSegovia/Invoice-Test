import {
    Button,
    TextField,
    Container,
    Paper,
    Input,
    Grid,
    Box,
    Typography,
    InputAdornment,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import * as React from "react";
  import "./App.css";
  
  import { useState, useRef } from "react";
  
  import InvoicePreview from "./component/invoice.Preview";
  import ReactToPrint from "react-to-print";
  
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
  
  function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const [inputList, setInputList] = useState([{ item:"", quantity:"", rate:"" ,amount:"" }])
  
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
  
    const componentRef = useRef();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <div>
        {showInvoice ? (
          <div ref={componentRef}>
            <Grid container>
              <Paper>
                <Grid item>
                  <InvoicePreview
                    billTo={billTo}
                    date={date}
                    paymentTerms={paymentTerms}
                    shipTo={shipTo}
                    dueDate={dueDate}
                    poNumber={poNumber}
                    invoiceNumber={invoiceNumber}
                  />
                </Grid>
              </Paper>
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
          </div>
        ) : (
          <div>
            <Container>
              <Paper elevation={8}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container>
                    <Grid item xs={7} mb={3} ml={3} justify="flex-end" mt={20}>
                      <TextField
                        label="Invoice From"
                        type="text"
                        onChange={handleChange}
                        name="invoice From"
                        value={invoiceFrom}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      justify="flex-end"
                      sx={{ ml: "auto", mt: "auto" }}
                    >
                      <Typography variant="h3" sx={{ ml: 5 }}>
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
                    <Grid item xs={7} pl={3} justify="flex-start">
                      <TextField
                        label="Bill To"
                        type="text"
                        onChange={handleChange}
                        name="billTo"
                        value={billTo}
                        variant="outlined"
                        sx={{ width: 160 }}
                        required
                        rows={2}
                        multiline
                        xs={10}
                      />
                      <TextField
                        label="Ship To"
                        type="text"
                        onChange={handleChange}
                        name="shipTo"
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
                    <Grid item>{/*Placeholder Table */}</Grid>
                  </Grid>
                  <Grid container mt={1}>
                    <Grid item pl={3}>
                      <TableContainer>
                        <Table sx={{ minWidth: 650 }} size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Item</TableCell>
                              <TableCell align="right">Quantity</TableCell>
                              <TableCell align="right">Rate</TableCell>
                              <TableCell align="right">Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
  
                                <TextField
                                  placeholder="Description of Service of product"
                                  size="small"
                                  type="text"
                                  name="item"
                                  xs
                                />
  
                                <TextField
                                  size="small"
                                  defaultValue="1"
                                  type="text"
                                  name="quantity"
                                  xs
                                />
  
  
                                <TextField
                                  size="small"
                                  type="text"
                                  name="rate"
                                  xs
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
                                  xs
                                />
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                  <Grid pl={3}>
                    <Button variant="contained">+ Line Item</Button>
                  </Grid>
                  <Grid container mt={5}>
                    <Grid item xs={7} mt={5} ml={3}>
                      <TextField
                        justify="flex-start"
                        rows={2}
                        sx={{ width: 540 }}
                        multiline
                        label="Notes - any revelant Information not already covered"
                      />
                      <TextField
                        justify="flex-start"
                        rows={2}
                        sx={{ width: 540, mt: 10 }}
                        multiline
                        label="Term and conditions - late fees, payment methonds,delivery schedule"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      justify="flex-end"
                      sx={{ ml: "auto", mb: "auto" }}
                    >
                      <Input></Input>
                      <TextField size="small" label="Tax" />
                      <TextField size="small" label="Amount" />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ displayPrint: "none" }} ml={3}>
                  <Button
                    variant="contained"
                    onClick={() => setShowInvoice(true)}
                  >
                    Preview
                  </Button>
                </Box>
              </Paper>
            </Container>
          </div>
        )}
      </div>
    );
  }
  
  export default App;
  