import React from "react";
import img1 from "@/public/images/wh-img.png";

function TransformBusiness() {
  return (
    <div className="flex p-5 md:pt-0 md:pl-[40px] md:pr-[40px] justify-center items-center flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={img1.src} alt="" className="object-contain md:h-96 w-full" />
      </div>
      <div className="w-full gap-5 mt-8 md:mt-0 md:w-1/2 flex justify-center items-center flex-col">
        <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
          <div className="il-services-wrapper flex justify-center items-center flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
            >
              <path
                d="M8.49992 11.125L6.37492 9.00001M8.49992 11.125C9.48935 10.7487 10.4385 10.2741 11.3333 9.70835M8.49992 11.125V14.6667C8.49992 14.6667 10.6462 14.2771 11.3333 13.25C12.0983 12.1025 11.3333 9.70835 11.3333 9.70835M6.37492 9.00001C6.75185 8.02211 7.22648 7.08472 7.79159 6.2021C8.61692 4.88246 9.76615 3.79592 11.13 3.04583C12.4938 2.29573 14.0268 1.90703 15.5833 1.91668C15.5833 3.84335 15.0308 7.22918 11.3333 9.70835M6.37492 9.00001H2.83325C2.83325 9.00001 3.22284 6.85376 4.24992 6.16668C5.39742 5.40168 7.79159 6.16668 7.79159 6.16668M3.18742 12.1875C2.12492 13.08 1.77075 15.7292 1.77075 15.7292C1.77075 15.7292 4.41992 15.375 5.31242 14.3125C5.81534 13.7175 5.80825 12.8038 5.24867 12.2513C4.97334 11.9885 4.61067 11.8366 4.23025 11.8249C3.84982 11.8131 3.47846 11.9422 3.18742 12.1875Z"
                stroke="#FF27A0"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="il-services-heading ms-2">Get Started</div>
          </div>
        </div>
        <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
          <div className="w-full flex md:justify-start justify-center items-center flex-col">
            <div className="w-full text-center md:text-start il-industries-serve">
              Ready to Transform Your Business?
            </div>
            <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
              Unlock Your Business Potential with Our Tailored Financing
              Solutions
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-start items-center">
          <button className="il-view-all-button w-full md:w-auto">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransformBusiness;
