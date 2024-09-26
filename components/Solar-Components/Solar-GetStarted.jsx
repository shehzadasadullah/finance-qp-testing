import React from "react";

function SolarGetStarted() {
  return (
    <>
      {/* Ready to Get Started */}

      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-3">
        <div className="w-full ps-tb-wrapper flex justify-center items-center flex-col">
          <div className="w-full ps-tb-div1-wrapper">
            <div className="w-full flex p-5 md:pt-[48px] md:pr-[40px] md:pb-[48px] md:pl-[40px] justify-center items-center flex-col ps-tb-div2-wrapper">
              <div className="w-full text-center tb-main-heading mt-5">
                Ready to Get Started?
              </div>
              <div className="w-full md:w-[40%] tb-sub-heading text-center mt-2">
                Get the financing you need to accelerate the growth and success
                of your technology projects. Get started now with Harvv
                Financing.
              </div>
              <button className="ps-il-view-all-button mt-5 md:mt-10 w-full md:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarGetStarted;
