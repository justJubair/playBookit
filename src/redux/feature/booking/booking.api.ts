import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserBookings: builder.query({
      query: () => {
        return {
          url: "/bookings/user",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetUserBookingsQuery } = bookingApi;
