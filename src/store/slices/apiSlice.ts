import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.thecolorapi.com" }),
  endpoints: (builder) => ({
    getColor: builder.query<{ hex: { value: string }; name: { value: string } }, string>({
      query: (color) => `/id?hex=${color.replace("#", "")}`, // Getting the color inputed from the API
    }),
    getColorPalette: builder.query({
      query: (color) => `/scheme?hex=${color.replace("#", "")}&mode=analogic&count=5`, // Getting the palette according to color inputed from the API
    }),
  }),
});

// Automatically generates the hook for fetching colors
export const { useGetColorQuery, useGetColorPaletteQuery } = apiSlice;
