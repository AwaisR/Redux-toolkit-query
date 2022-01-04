import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const getPhotos = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPhotos: builder.query({
      query: (name) => `photos`,
    }),
  }),
});
export const { useGetAllPhotosQuery } = getPhotos;
