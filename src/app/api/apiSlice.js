import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://icc-paris-voeux-backend.onrender.com",
  }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
