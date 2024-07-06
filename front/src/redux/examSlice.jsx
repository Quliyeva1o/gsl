import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.gsl.edu.az/"
export const examAPI = createApi({
    reducerPath: "examAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getExams: builder.query({
            query: () => `exam/types?status=0`,
        })
    }),
})

export const { useGetExamsQuery } = examAPI