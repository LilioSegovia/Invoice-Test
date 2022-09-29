import {
  Typography,
  Grid,
  InputBase,
  Container,
  TextField,
} from "@mui/material";

import * as React from "react";

const InvoicePreview = ({
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
  item,
  quantity,
  rate,
  amount,
  handleDate,
  handleDueDate
}) => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={7} mb={3} ml={3} justify="flex-end" mt={20}>
            <Typography>{invoiceFrom}</Typography>
          </Grid>
          <Grid item justify="flex-end" sx={{ mb: "auto" }} xs={3}>
            <Typography variant="h3" sx={{ ml: 5 }}>
              {" "}
              INVOICE
            </Typography>

            <Typography># {invoiceNumber}</Typography>

            <Typography sx={{ mt: 1 }}>Date: {handleDate}</Typography>
            <Typography sx={{ mt: 1 }}>{paymentTerms}</Typography>
          </Grid>
        </Grid>
        <Grid container></Grid>
        <Grid container>
          <Grid item xs={7} pl={3} mt={10} justify="flex-start">
            <Typography sx={{ width: 160 }} >
              {billTo}
            </Typography>
            <Typography sx={{ width: 160, ml: 2 }} >
              {shipTo}
            </Typography>
          </Grid>
          <Grid item mt={1} justify="flex-end" sx={{ ml: "auto" }}>
            <Typography>Due Date: {handleDueDate}</Typography>

            <Typography sx={{ mt: 1 }}>{poNumber}</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item>{/*Placeholder Table */}</Grid>
        </Grid>
        <Grid container mt={1}>
          <Grid item pl={2}>
            <TextField
              size="small"
              defaultValue="Item"
              variant="outlined"
              sx={{ width: 360 }}
            />
            <TextField
              sx={{ width: 120 }}
              size="small"
              defaultValue="Quantity"
            />
            <TextField sx={{ width: 120 }} size="small" defaultValue="Rate" />
            <TextField sx={{ width: 120 }} size="small" defaultValue="Amount" />
          </Grid>
          <Grid item pl={2}>
            <TextField
              placeholder="Description of Service of product"
              size="small"
              type="text"
              name="item"
              sx={{ width: 360 }}
            />
            {item}

            <TextField
              size="small"
              type="text"
              name="quantity"
              sx={{ width: 120 }}
            />
            {quantity}

            <TextField
              size="small"
              type="text"
              name="rate"
              sx={{ width: 120 }}
            />
            {rate}

            <TextField
              size="small"
              type="text"
              name="amount"
              sx={{ width: 120 }}
            />
            {amount}
          </Grid>
        </Grid>
        <Grid pl={3}></Grid>
        <Grid container mt={5}>
          <Grid item xs={7} mt={2.5} ml={3} mb={10}>
            <Typography justify="flex-start" sx={{ width: 540, mt: 1 }}>
              {notes}
            </Typography>

            <Typography justify="flex-start" sx={{ width: 540, mt: 1 }}>
              {terms}
            </Typography>
          </Grid>
          <Grid item xs={4} justify="flex-end" mt={1}>
            <InputBase placeholder="Subtotal" sx={{ width: 100, mt: 1.5 }} />
            <Typography size="small" sx={{ mt: 1 }}>
              {subtotal}
            </Typography>
            <InputBase placeholder="Tax" sx={{ width: 100, mt: 1.5 }} />
            <Typography size="small" sx={{ mt: 1 }}>
              {tax}
            </Typography>
            <InputBase placeholder="Total" sx={{ width: 100, mt: 1.5 }} />
            <Typography size="small" sx={{ mt: 1 }}>
              {total}
            </Typography>
            <InputBase placeholder="Amount Paid" sx={{ width: 100, mt: 1.5 }} />
            <Typography size="small" sx={{ mt: 1 }}>
              {amountPaid}
            </Typography>
            <InputBase placeholder="Balance Due" sx={{ width: 100, mt: 1.5 }} />
            <Typography size="small" sx={{ mt: 1 }}>
              {balanceDue}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid mt={10}></Grid>
    </div>
  );
};

export default InvoicePreview;
