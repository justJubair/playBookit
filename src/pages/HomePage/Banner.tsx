import bannerVidoe from "../../assets/videos/banner-video.mp4";
import CustomButton from "@/components/CustomButton";
const Banner = () => {
  return (
    <div>
      <video
        className="w-full object-cover bg-center h-screen"
        src={bannerVidoe}
        autoPlay={true}
        loop={true}
        muted
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/75"></div>
      <div className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="  text-center text-primaryYellow font-extrabold text-2xl md:text-4xl 2xl:text-8xl xl:text-6xl lg:text-5xl">
          Book Your Sports Facility with{" "}
          <span className="text-secondaryPink">Ease</span>
        </h1>
        <h4 className="text-sm text-center lg:text-lg text-white mt-4">
          Find, Reserve, and Play at the Best Sports Venues Near You
        </h4>

        <CustomButton className="mt-3">Book Now</CustomButton>
      </div>
    </div>
  );
};
export default Banner;
