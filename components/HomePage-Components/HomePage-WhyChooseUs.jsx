import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ch1.png";
import img2 from "@/public/images/ch2.png";
import img3 from "@/public/images/ch3.png";
import img4 from "@/public/images/ch4.png";
import img5 from "@/public/images/ch5.png";
import img6 from "@/public/images/ch6.png";
import imgFeature from "@/public/images/image-feature.png";

function HomePageWhyChooseUs() {
  const isXLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    setSlidesToShow(isXLarge ? 4.6 : isLarge ? 3 : isMedium ? 2 : 1);
  }, [isXLarge, isLarge, isMedium, isSmall]);

  const slides = [
    {
      heading: "Flexible Net Terms",
      subHeading:
        "Choose from 30, 60, 90, and 120-day payment terms to fit your business needs perfectly",
      bgSrc: img1.src,
    },
    {
      heading: "Customizable Financing Fees",
      subHeading:
        "Adjust financing fees for sellers, covering 0% to 100% based on your specific requirements",
      bgSrc: img2.src,
    },
    {
      heading: "Invoice Creation",
      subHeading:
        "Allow both buyers and sellers to create and approve invoices smoothly and efficiently",
      bgSrc: img3.src,
    },
    {
      heading: "Integration with Banking and Accounting Tools",
      subHeading:
        "Sync effortlessly with banking and accounting systems for real-time, accurate updates",
      bgSrc: img4.src,
    },
    {
      heading: "Real-Time Underwriting",
      subHeading:
        "Receive instant underwriting decisions and get payouts within just T+5 days",
      bgSrc: img5.src,
    },
    {
      heading: "Role Switching",
      subHeading:
        "Easily switch roles between buyer and seller whenever your business needs it",
      bgSrc: img6.src,
    },
  ];

  const slideCount = slides.length;
  const totalSlides = slideCount - slidesToShow;

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalSlides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalSlides : prevIndex - 1
    );
  };
  return (
    <div className="w-full px-2 lg:px-4">
      <div
        style={{
          background: "linear-gradient(304deg, #FFF0F9 3.43%, #FFF 92.37%)",
        }}
        className="w-full rounded-[16px]"
      >
        <div className="p-5 md:pt-[48px] md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-10 mt-5">
          <div className="w-full flex justify-center flex-col items-center">
            <div className="il-services-wrapper flex justify-center items-center flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M8.50008 11.125C6.15287 11.125 4.25008 9.22221 4.25008 6.875V2.93982C4.25008 2.64668 4.25008 2.50011 4.2928 2.38274C4.36441 2.18599 4.5194 2.031 4.71615 1.95939C4.83352 1.91667 4.98009 1.91667 5.27323 1.91667H11.7269C12.0201 1.91667 12.1666 1.91667 12.284 1.95939C12.4808 2.031 12.6358 2.18599 12.7074 2.38274C12.7501 2.50011 12.7501 2.64668 12.7501 2.93982V6.87501C12.7501 9.22222 10.8473 11.125 8.50008 11.125ZM8.50008 11.125V13.25M12.7501 3.33334H14.5209C14.851 3.33334 15.016 3.33334 15.1461 3.38726C15.3197 3.45915 15.4576 3.59704 15.5295 3.7706C15.5834 3.90078 15.5834 4.0658 15.5834 4.39584V4.75001C15.5834 5.40873 15.5834 5.7381 15.511 6.00833C15.3145 6.74165 14.7417 7.31444 14.0084 7.51093C13.7382 7.58334 13.4088 7.58334 12.7501 7.58334M4.25008 3.33334H2.47925C2.14921 3.33334 1.98419 3.33334 1.85401 3.38726C1.68045 3.45915 1.54256 3.59704 1.47067 3.7706C1.41675 3.90078 1.41675 4.0658 1.41675 4.39584V4.75001C1.41675 5.40873 1.41675 5.7381 1.48916 6.00833C1.68565 6.74165 2.25844 7.31444 2.99176 7.51093C3.26199 7.58334 3.59135 7.58334 4.25008 7.58334M5.27323 16.0833H11.7269C11.9008 16.0833 12.0417 15.9424 12.0417 15.7685C12.0417 14.3776 10.9142 13.25 9.52323 13.25H7.47693C6.08599 13.25 4.95841 14.3776 4.95841 15.7685C4.95841 15.9424 5.09936 16.0833 5.27323 16.0833Z"
                  stroke="#FF27A0"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="il-services-heading ms-2">Why Choose Us</div>
            </div>
          </div>
          <div className="w-full mt-2 md:mt-2 flex justify-center flex-col items-center">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-full text-center il-industries-serve">
                How we Make Things Better for You
              </div>
              <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center il-industries-serve-sub">
                Discover the Benefits of Harvv Financing for Your Business
              </div>
            </div>
          </div>
          <div className="w-full p-4 bg-[#F9FAFB] gap-4 rounded-[24px] mt-5 flex justify-center flex-col items-center">
            <div className="w-full flex justify-center items-center flex-col md:flex-row gap-4">
              <div className="w-full flex justify-center items-center flex-col gap-4 lg:h-[504px]">
                <div className="w-full h-full bg-[#fff] p-6 rounded-[24px] flex justify-center md:justify-start items-center gap-4 flex-col">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="w-[48px] h-[48px] p-[12px] flex justify-center items-center rounded-full bg-[#FFF0F9]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M21.5 10H3.5M16.5 2V6M8.5 2V6M8.3 22H16.7C18.3802 22 19.2202 22 19.862 21.673C20.4265 21.3854 20.8854 20.9265 21.173 20.362C21.5 19.7202 21.5 18.8802 21.5 17.2V8.8C21.5 7.11984 21.5 6.27976 21.173 5.63803C20.8854 5.07354 20.4265 4.6146 19.862 4.32698C19.2202 4 18.3802 4 16.7 4H8.3C6.61984 4 5.77976 4 5.13803 4.32698C4.57354 4.6146 4.1146 5.07354 3.82698 5.63803C3.5 6.27976 3.5 7.11984 3.5 8.8V17.2C3.5 18.8802 3.5 19.7202 3.82698 20.362C4.1146 20.9265 4.57354 21.3854 5.13803 21.673C5.77976 22 6.61984 22 8.3 22Z"
                          stroke="#FF27A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full text-center hns-wcu-heading md:text-start">
                    Flexible Payment Options for Your Customers
                  </div>
                  <div className="w-full text-center hns-wcu-sub-heading md:text-start">
                    Offer net 30, 60, or 90-day terms to your customers, making
                    it easier for them to buy and boosting your sales.
                  </div>
                </div>
                <div className="w-full h-full bg-[#fff] p-6 rounded-[24px] flex justify-center md:justify-start items-center gap-4 flex-col">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="w-[48px] h-[48px] p-[12px] flex justify-center items-center rounded-full bg-[#FFF0F9]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M14.0295 8.35186C13.4571 8.75995 12.7566 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.253 2 14.3522 2.65842 14.9705 3.64814M6.5 20.0872H9.11029C9.45063 20.0872 9.78888 20.1277 10.1188 20.2086L12.8769 20.8789C13.4753 21.0247 14.0988 21.0388 14.7035 20.9214L17.753 20.3281C18.5585 20.1712 19.2996 19.7854 19.8803 19.2205L22.0379 17.1217C22.654 16.5234 22.654 15.5524 22.0379 14.9531C21.4832 14.4134 20.6047 14.3527 19.9771 14.8103L17.4626 16.6449C17.1025 16.9081 16.6643 17.0498 16.2137 17.0498H13.7855L15.3311 17.0498C16.2022 17.0498 16.9079 16.3633 16.9079 15.5159V15.2091C16.9079 14.5055 16.4156 13.892 15.7141 13.7219L13.3286 13.1417C12.9404 13.0476 12.5428 13 12.1431 13C11.1783 13 9.43189 13.7988 9.43189 13.7988L6.5 15.0249M20.5 6.5C20.5 8.433 18.933 10 17 10C15.067 10 13.5 8.433 13.5 6.5C13.5 4.567 15.067 3 17 3C18.933 3 20.5 4.567 20.5 6.5ZM2.5 14.6L2.5 20.4C2.5 20.9601 2.5 21.2401 2.60899 21.454C2.70487 21.6422 2.85785 21.7951 3.04601 21.891C3.25992 22 3.53995 22 4.1 22H4.9C5.46005 22 5.74008 22 5.95399 21.891C6.14215 21.7951 6.29513 21.6422 6.39101 21.454C6.5 21.2401 6.5 20.9601 6.5 20.4V14.6C6.5 14.0399 6.5 13.7599 6.39101 13.546C6.29513 13.3578 6.14215 13.2049 5.95399 13.109C5.74008 13 5.46005 13 4.9 13L4.1 13C3.53995 13 3.25992 13 3.04601 13.109C2.85785 13.2049 2.70487 13.3578 2.60899 13.546C2.5 13.7599 2.5 14.0399 2.5 14.6Z"
                          stroke="#FF27A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full text-center hns-wcu-heading md:text-start">
                    Affordable and Transparent Financing
                  </div>
                  <div className="w-full text-center hns-wcu-sub-heading md:text-start">
                    Avoid the high costs and confusion of traditional financing
                    with Harvv's straightforward, budget-friendly services.
                  </div>
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(345deg, #EC008C -2%, #FC6767 83.36%)",
                }}
                className="w-full p-6 flex justify-center rounded-[24px] items-center flex-col gap-2.5 lg:h-[504px]"
              >
                <div className="w-full flex justify-center items-center">
                  <img
                    src={imgFeature.src}
                    alt="Image"
                    className="md:h-[344px]"
                  />
                </div>
                <div className="w-full flex justify-center items-center flex-col gap-2.5">
                  <div className="w-full text-center md:text-start hns-wcu-cfc-heading">
                    Cash Flow Crunch
                  </div>
                  <div className="w-full text-center md:text-start hns-wcu-cfc-sub-heading">
                    Harvv offers immediate financing solutions, ensuring sellers
                    can maintain steady cash flow and focus on growth.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:h-[254px] flex justify-center items-center flex-col md:flex-row gap-4">
              <div className="w-full h-full bg-[#fff] p-6 rounded-[24px] flex justify-center md:justify-start items-center gap-4 flex-col">
                <div className="w-full flex justify-center md:justify-start items-center">
                  <div className="w-[48px] h-[48px] p-[12px] flex justify-center items-center rounded-full bg-[#FFF0F9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M9.5 10.5L11.5 12.5L16 8M20.5 21V7.8C20.5 6.11984 20.5 5.27976 20.173 4.63803C19.8854 4.07354 19.4265 3.6146 18.862 3.32698C18.2202 3 17.3802 3 15.7 3H9.3C7.61984 3 6.77976 3 6.13803 3.32698C5.57354 3.6146 5.1146 4.07354 4.82698 4.63803C4.5 5.27976 4.5 6.11984 4.5 7.8V21L7.25 19L9.75 21L12.5 19L15.25 21L17.75 19L20.5 21Z"
                        stroke="#FF27A0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full text-center hns-wcu-heading md:text-start">
                  Automated Invoicing
                </div>
                <div className="w-full text-center hns-wcu-sub-heading md:text-start">
                  Manage your invoices with ease through Harvv's quick and
                  straightforward factoring services, allowing you to focus on
                  what matters most—growing your business.
                </div>
              </div>
              <div className="w-full h-full bg-[#fff] p-6 rounded-[24px] flex justify-center md:justify-start items-center gap-4 flex-col">
                <div className="w-full flex justify-center md:justify-start items-center">
                  <div className="w-[48px] h-[48px] p-[12px] flex justify-center items-center rounded-full bg-[#FFF0F9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 10H2M22 11V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19H11.5M18 21C18 21 21 19.5701 21 17.4252V14.9229L18.8124 14.1412C18.2868 13.9529 17.712 13.9529 17.1864 14.1412L15 14.9229V17.4252C15 19.5701 18 21 18 21Z"
                        stroke="#FF27A0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full text-center hns-wcu-heading md:text-start">
                  Simplify Complex No Risk
                </div>
                <div className="w-full text-center hns-wcu-sub-heading md:text-start">
                  Harvv conducts thorough credit assessments on your behalf,
                  ensuring that only credit worthy customers are offered net
                  terms, reducing the risk of non-payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWhyChooseUs;
