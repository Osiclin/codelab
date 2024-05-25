import { createApi } from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../axiosBaseQuery"

const baseUrl = "https://randomuser.me/api"

export const user = createApi({
  reducerPath: "user",
  baseQuery: axiosBaseQuery({ baseUrl }),
  refetchOnMountOrArgChange: true,
  endpoints(build) {
    return {
      getUsers: build.query({
        query: (params) => ({ url: "", method: "get", params }),
      })
    }
  },
})

export const {
  useGetUsersQuery,
} = user