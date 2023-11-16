import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const dangerApi = createApi({
    reducerPath: "dangerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://185.192.246.110:8777"
    }),
    endpoints: (build) => ({
        getAllDangers: build.query({
            query: () => ({
                url: "/danger/all",
                method: "GET"
            }),
            transformResponse: (response) => {
                return response
            }
        }),
        getDangerById: build.query({
            query: (id) => ({
                url: `/danger/{id}?id_=${id}`,
                method: "GET"
            }),
            transformResponse: (response) => {
                return response
            }
        })
    })
})
export const {useGetAllDangersQuery, useGetDangerByIdQuery} = dangerApi