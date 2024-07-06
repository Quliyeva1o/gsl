import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.gsl.edu.az/"
export const proudAPI = createApi({
    reducerPath: "proudAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProuds: builder.query({
            query: () => `student/excellents`,
        })
    }),
})

export const { useGetProudsQuery } = proudAPI