import { useGetUserBookingsQuery } from "@/redux/feature/booking/booking.api";

const UserBookings = () => {
  // const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);
  const { data: bookingData, isLoading } = useGetUserBookingsQuery(undefined);
  console.log(bookingData);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  return (
    <div>
      <p> HELLO I Am UserBookings </p>
    </div>
  );
};
export default UserBookings;
