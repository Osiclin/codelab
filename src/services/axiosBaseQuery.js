import axios from "axios"

export const axiosBaseQuery = ({ baseUrl }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers
      })

      if (![200, 201].includes(result?.status)) {
        alert(result?.data?.error || "Internal Server Error")
      }

      return { data: result?.data }
    } catch (err) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
