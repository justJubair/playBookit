import { TFacility } from "@/types";
import FacilityCard from "./FacilityCard";
import SectionHeadline from "@/components/SectionHeadline";

interface FeaturedFacilityProps {
  data: TFacility[];
}

const FeaturedFacility = ({ data }: FeaturedFacilityProps) => {
  return (
    <div className="mt-20">
      <SectionHeadline>Our Facilities</SectionHeadline>
      <div className="flex gap-4 items-center justify-center px-4 flex-wrap">
        {data?.slice(0, 6).map((facility: TFacility) => (
          <FacilityCard facility={facility} key={facility?._id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedFacility;
