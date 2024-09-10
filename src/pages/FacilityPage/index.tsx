import CustomButton from "@/components/CustomButton";
import { useGetAllFacilityQuery } from "@/redux/feature/facility/facility.api";
import { TFacility } from "@/types";
import { useParams } from "react-router-dom";

const FacilityPage = () => {
  const { id } = useParams();
  const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);

  const facility = facilityData?.data.find(
    (item: TFacility) => item._id === id
  );
  // console.log(facility);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  return (
    <div>
      <div className="h-16 absolute bg-black w-full top-0 z-10"></div>

      <img
        className="h-screen w-full object-cover object-center"
        src={facility?.img}
        alt={facility?.name}
      />
      <div className="absolute h-screen w-full top-0 left-0 bg-black/80"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  flex flex-col items-center">
        <h2 className="text-4xl mb-1 font-bold text-primaryYellow">
          {facility?.name}
        </h2>
        <p className="text-gray-300 text-lg">{facility?.description}</p>
        <div className="flex items-center gap-1 text-base text-gray-300 mt-2">
          <p>Price per hour:</p>{" "}
          <p className="font-bold text-secondaryPink">
            ${facility?.pricePerHour}
          </p>
        </div>
        <div className="flex items-center text-gray-300 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <p className="text-sm">{facility?.location}</p>
        </div>
        <CustomButton className="mt-4">Book Now</CustomButton>
      </div>
    </div>
  );
};
export default FacilityPage;
