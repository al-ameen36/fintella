import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const url = import.meta.env.PROD
//   ? "https://ad-enhance-node.onrender.com"
//   : null;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: url || "/api",
    baseUrl: "/api",
  }),
  endpoints: (build) => ({
    signup: build.query({
      query: (body) => ({ url: `user/signup`, method: "POST", body: body }),
    }),
    signin: build.query({
      query: () => ({ url: `user/signin` }),
    }),
  }),
});

export const { useSigninQuery, useSignupQuery } = userApi;
