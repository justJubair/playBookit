import Banner from "./Banner";
import FeaturedFacility from "./FeaturedFacility";
import HowItWorks from "./HowItWorks";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Testimonials from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturedFacility />
      <SpecialOffers />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};
export default HomePage;
