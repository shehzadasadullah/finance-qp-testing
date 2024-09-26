import React from "react";
import heroImage from "@/public/images/si-hero-bg.png";

function SolarHeroSection() {
  return (
    <>
      {/* Hero Section */}

      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full md:tracking-wide si-hero-heading text-2xl md:text-5xl p-5 md:pt-[40px] md:pr-[60px] md:pl-[60px] text-center md:text-start">
          Attention Solar Distributors: Offer Net 30, 60, and 90-Day Terms to
          Solar Installers.
        </div>
        <div className="w-full si-hero-sub-heading pt-0 p-5 md:pr-[60px] md:pl-[60px] text-center md:text-start">
          Accelerate Your Sales with Customizable Net Terms for Solar Projects
        </div>
        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full flex justify-center md:justify-start items-center md:items-start flex-col">
            <div className="w-full relative">
              <img
                src={heroImage.src}
                alt=""
                className="w-full h-full rounded-b-[16px]"
              />
            </div>
            <div className="absolute mt-5 md:mt-0">
              <div className="md:pl-[60px]">
                <div className="flex si-top-learn-how-wrapper justify-center items-center flex-col rounded-[16px] gap-5 xl:gap-8 p-5 md:p-[24px]">
                  <div className="w-full text-center md:text-start si-check-our-plans">
                    Check Our Plans
                  </div>
                  <button className="flex justify-center gap-3 items-center flex-row w-full">
                    <div className="si-check-our-plans-2">
                      Brighten Your Future
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.33398 10H16.6673M16.6673 10L11.6673 5M16.6673 10L11.6673 15"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarHeroSection;
