import React from "react"
import {Table, TableHead, TableRow, TableContainer, TableCell, TableBody} from "@mui/material"

export default function TableTest({ list, total }) {
  return (
    <>
      <Table mb={10}>
        <TableHead>
          <TableRow >
            <TableCell >Description</TableCell>
            <TableCell >Quantity</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Amount</TableCell>
          </TableRow>
        </TableHead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <TableBody>
              <TableRow >
                <TableCell>{description}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{amount}</TableCell>
              </TableRow>
            </TableBody>
          </React.Fragment>
        ))}
      </Table>
    </>
  )
}
