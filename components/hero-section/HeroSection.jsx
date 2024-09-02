import React from "react";
import image1 from "@/public/images/hero-img-1.png";
import image2 from "@/public/images/hero-img-2.png";
import image3 from "@/public/images/hero-img-3.png";
import image4 from "@/public/images/hero-img-4.png";
import IndustriesSliderHeroSection from "../industries/IndustriesSliderHeroSection";

function HeroSection({ heading }) {
  return (
    <>
      <div className="w-full rounded-xl md:pt-12 mt-2 flex justify-center items-center flex-col bg-black">
        <div className="hs-wrapper-main rounded-xl w-full h-full">
          <div className="hs-wrapper-2 rounded-xl w-full h-full flex justify-center items-center flex-col">
            <div className="hs-wrapper-3 rounded-xl flex justify-center items-center flex-col w-full h-full">
              <div className="hs-wrapper3-financing-div mt-12 flex justify-center items-center flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6020_4635)">
                    <path
                      d="M6.37952 0.124756C5.56772 4.53441 4.90962 5.19247 0.5 6.00428C4.90965 6.81608 5.56772 7.47415 6.37952 11.8838C7.19133 7.47415 7.8494 6.81608 12.259 6.00428C7.8494 5.19247 7.19129 4.53441 6.37952 0.124756ZM12.7609 8.397C12.2446 11.2014 11.826 11.6199 9.02171 12.1361C11.826 12.6524 12.2446 13.071 12.7609 15.8753C13.2771 13.071 13.6957 12.6524 16.5 12.1361C13.6956 11.6199 13.2771 11.2014 12.7609 8.397Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6020_4635">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="ms-1">Financing Solutions</div>
              </div>
              <div className="hs-wrapper3-financing-heading md:px-[28%] w-full text-center mt-6">
                Unlock 30, 60, 90 Day Terms—Get Paid Today, Boost Your
                Conversions
              </div>
              <div className="hs-wrapper3-financing-sub-heading px-3 md:px-0 mt-6 mb-6 w-full text-center">
                100% Upfront, No Guarantees, Low Fees—Power Your Cash Flow and
                Sales
              </div>
            </div>
            <div className="w-full pb-6 md:pb-0 flex px-3 md:px-0 justify-center items-center flex-col md:flex-row gap-3">
              <div className="w-full md:w-[337px]">
                <div class="input-container2 w-full">
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.25 3.75H16.75C16.9489 3.75 17.1397 3.82902 17.2803 3.96967C17.421 4.11032 17.5 4.30109 17.5 4.5V15.5C17.5 15.6989 17.421 15.8897 17.2803 16.0303C17.1397 16.171 16.9489 16.25 16.75 16.25H3.25C3.05109 16.25 2.86032 16.171 2.71967 16.0303C2.57902 15.8897 2.5 15.6989 2.5 15.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM16 6.9285L10.054 12.2535L4 6.912V14.75H16V6.9285ZM4.38325 5.25L10.0457 10.2465L15.6265 5.25H4.38325Z"
                        fill="#FFF0F9"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-transparent"
                  />
                </div>
              </div>
              <button className="w-full md:w-auto hs-wrapper2-started-button">
                Get Started
              </button>
            </div>
            <div className="w-full md:mt-4">
              <IndustriesSliderHeroSection></IndustriesSliderHeroSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
