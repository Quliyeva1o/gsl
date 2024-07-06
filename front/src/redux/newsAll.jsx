import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.gsl.edu.az/"
export const newsAPI = createApi({
    reducerPath: "newsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNewss: builder.query({
            query: () => `news`,
        })
    }),
})

export const { useGetNewssQuery } = newsAPI