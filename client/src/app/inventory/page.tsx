"use client";

import { useGetProductsQuery } from "@/state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/app/(components)/Header";
import { columns } from "./columnConfig";

const Inventory = () => {
  const {data:products, isError, isLoading} = useGetProductsQuery();
  

  if (isLoading){
    return <div className="py-4">Loading...</div>
  }

  if (isError || !products){
    return (
        <div className="text-center text-rose-500">
            Something went wrong. Failed to fetch the products data.
        </div>
    )
  }

  return (
    <div className="flex flex-col">
        <Header title="Inventory"/>
        <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row)=> row.productId}
            checkboxSelection
            className="bg-white shadow rounded-lg border border-gray-200 mt-5 !textgray-700"
        />
    </div>
  )
}

export default Inventory
