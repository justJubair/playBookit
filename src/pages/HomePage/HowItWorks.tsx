// import React from "react";
import SectionHeadline from "@/components/SectionHeadline";
import { FaSearchLocation, FaCalendarCheck, FaFutbol } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Sports Facilities",
      description:
        "Explore various sports facilities available for booking. Choose the one that suits your preference.",
      icon: <FaSearchLocation className="w-12 h-12 text-secondaryPink" />,
    },
    {
      id: 2,
      title: "Check Availability",
      description:
        "Select your preferred date and time. Our real-time booking system shows up-to-date availability",
      icon: <FaCalendarCheck className="w-12 h-12 text-secondaryPink" />,
    },
    {
      id: 3,
      title: "Book Your Slot",
      description:
        "With just a few clicks, secure your spot at the facility of your choice. Choose your preferred time, and confirm your booking instantly.",
      icon: <FaFutbol className="w-12 h-12 text-secondaryPink" />,
    },
  ];

  return (
    <div className="mt-20  text-white">
      {/* <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2> */}
      <SectionHeadline>How It Works</SectionHeadline>
      <div className="flex items-center justify-center gap-4 mx-auto flex-col flex-wrap px-4 md:flex-row">
        {steps.map((step, index) => (
          <div key={step.id} className="">
            <div className="bg-black p-6 lg:w-96 lg:h-72 2xl:w-[500px] rounded-lg shadow-lg  flex flex-col items-center justify-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-primaryYellow text-center">
                {step.title}
              </h3>
              <p className="text-gray-400 mt-2 text-center">
                {step.description}
              </p>
            </div>
            {/* {index < steps.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
