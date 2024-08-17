import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DashboardMetricsType, Product, NewProduct } from "./type";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics","Products"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetricsType, void>({
      query: () => "/dashboard/metrics",
      providesTags: ["DashboardMetrics"],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => (
        {
          url:"/products", 
          params: search ? {search}: {}
        }),
      providesTags: ["Products"],
    }),
    createProducts: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url:"/products",
        method:"POST",
        body: newProduct
      }),
      invalidatesTags:["Products"]
    })
  }),
});

export const { useGetDashboardMetricsQuery, useGetProductsQuery, useCreateProductsMutation } = api;
