import { useGetAllFacilityQuery } from "@/redux/feature/facility/facility.api";
import FacilityCard from "./FacilityCard";
import SectionHeadline from "@/components/SectionHeadline";

const FeaturedFacility = () => {
  const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  return (
    <div className="mt-20">
      <SectionHeadline>Our Facilities</SectionHeadline>
      <div className="flex gap-4 items-center justify-center px-4 flex-wrap">
        {facilityData?.data?.slice(0, 6).map((facility) => (
          <FacilityCard facility={facility} key={facility?._id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedFacility;
