import {  GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field:"productId", headerName: "ID", width: 90
    },
    {
        field:"name", headerName:"Product Name", width:200
    },
    {
        field:"price", 
        headerName:"Price", 
        width:110, 
        type:"number",
        valueGetter: (value,row) => `$${row.price}`
    },
    {
        field:"rating", 
        headerName:"Rating", 
        width:110, 
        type:"number",
        valueGetter: (value,row) => row.rating ? row.rating : "N/A"
    },
    {
        field:"stockQuantity", headerName:"Stock Quantity", width:150, type:"number"
    }
  ]