import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DashboardMetricsType } from "./type";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetricsType, void>({
      query: () => "/dashboard/metrics",
      providesTags: ["DashboardMetrics"],
    }),
  }),
});

export const { useGetDashboardMetricsQuery } = api;
