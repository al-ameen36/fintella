import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.PROD ? "https://fintella.itcentral.ng" : "";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url || "/api",
  }),
  endpoints: (build) => ({
    signup: build.query({
      query: (body) => ({ url: `${url}/register`, method: "POST", body: body }),
    }),
    signin: build.query({
      query: (body) => ({ url: `${url}/signin`, method: "POST", body: body }),
    }),
  }),
});

export const { useSigninQuery, useSignupQuery } = userApi;
