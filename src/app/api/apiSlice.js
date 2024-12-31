import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_BASE_URL,
  }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
