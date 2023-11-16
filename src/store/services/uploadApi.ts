import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
    reducerPath: "uploadApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "ayin1.k-lab.su"
    }),
    endpoints: (build) => ({
        sendFile: build.mutation({
            query: (file) => ({
                url: "/upload_file",
                method: "POST",
                body: file
            }),
            transformResponse: (response) => {
                return response
            }
        }),
    })
})
export const {useSendFileMutation} = uploadApi