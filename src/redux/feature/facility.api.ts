import { baseApi } from "../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => {
        return {
          url: "/facility",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllFacilityQuery } = facilityApi;
