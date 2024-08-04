import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../utils/localstorage";

export const emptySplitApi = createApi({
  reducerPath: "emptySplitApi",
  baseQuery: fetchBaseQuery({
      baseUrl: "https://moviesbackend-ccdvg8e6e2hpdyhk.uksouth-01.azurewebsites.net/",
      
    prepareHeaders: async (headers) => {
      try {
        const token = getToken();
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");
        headers.set("Access-Control-Allow-Origin", "*");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        } else {
          headers.set("Authorization", "");
        }
      } catch (err) {
        headers.set("Authorization", "");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
