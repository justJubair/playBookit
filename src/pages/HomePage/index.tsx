import { useGetAllFacilityQuery } from "@/redux/feature/facility/facility.api";
import Banner from "./Banner";
import FeaturedFacility from "./FeaturedFacility";
import HowItWorks from "./HowItWorks";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Testimonials from "./Testimonial/Testimonial";

const HomePage = () => {
  const { data: facilityData, isLoading } = useGetAllFacilityQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }
  return (
    <div>
      <Banner />
      <FeaturedFacility data={facilityData?.data} />
      <HowItWorks />
      <SpecialOffers />
      <Testimonials />
    </div>
  );
};
export default HomePage;
