import { useGetAllFacilityQuery } from "@/redux/feature/facility/facility.api";
import FacilityCard from "./FacilityCard";
import SectionHeadline from "@/components/SectionHeadline";

const FeaturedFacility = () => {
  const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <SectionHeadline>Our Facilities</SectionHeadline>
      <div className="flex flex-wrap gap-4 items-center justify-center px-4">
        {facilityData?.data?.slice(0, 6).map((facility) => (
          <FacilityCard facility={facility} key={facility?._id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedFacility;
