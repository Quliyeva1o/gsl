import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.gsl.edu.az/"
export const newAPI = createApi({
    reducerPath: "cinemaApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => `news?count=3`,
        })
    }),
})

export const { useGetNewsQuery } = newAPI