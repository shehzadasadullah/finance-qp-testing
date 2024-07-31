import React from "react";
import image1 from "@/public/images/hero-img-1.png";
import image2 from "@/public/images/hero-img-2.png";
import image3 from "@/public/images/hero-img-3.png";
import image4 from "@/public/images/hero-img-4.png";

function HeroSection() {
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
              <div className="hs-wrapper3-financing-heading w-full text-center mt-6">
                Transform Your Cash Flow with
              </div>
              <div className="hs-wrapper3-financing-heading w-full text-center">
                Harvv Financing
              </div>
              <div className="hs-wrapper3-financing-sub-heading mt-6 mb-6 lg:mb-12 w-full text-center">
                100% Advance Rate, No Risk, Low Fees
              </div>
            </div>
            <div className="w-full pb-6 md:pb-0 flex justify-center items-center flex-col">
              <button className="hs-wrapper2-started-button">
                Get Started
              </button>
            </div>
            <div className="p-2 hidden md:flex">
              <div className="flex gap-3 justify-center items-center flex-col md:flex-row hs-wrapper2-images-div-wrapper mt-4 lg:mt-10">
                <img src={image1.src} alt="Image 1" className="h-56 lg:h-72" />
                <img src={image2.src} alt="Image 2" className="h-56 lg:h-72" />
                <img src={image3.src} alt="Image 3" className="h-56 lg:h-72" />
                <img src={image4.src} alt="Image 4" className="h-56 lg:h-72" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
