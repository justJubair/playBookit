import { useGetAllFacilityQuery } from "@/redux/feature/facility.api";
import Banner from "./Banner";
import FeaturedFacility from "./FeaturedFacility";

const HomePage = () => {
  const { data: facilityData } = useGetAllFacilityQuery(undefined);
  console.log(facilityData);
  return (
    <div>
      <Banner />
      <FeaturedFacility />
    </div>
  );
};
export default HomePage;
