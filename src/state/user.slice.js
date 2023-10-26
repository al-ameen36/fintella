import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.PROD ? "https://fintella.itcentral.ng" : "/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (build) => ({
    signup: build.query({
      query: (body) => ({ url: `/register`, method: "POST", body: body }),
    }),
    signin: build.mutation({
      query: (body) => ({ url: `/login`, method: "POST", body: body }),
    }),
  }),
});

export const { useSigninMutation, useSignupQuery } = userApi;
