import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/wh-img1.png";
import img2 from "@/public/images/wh-img2.png";
import img3 from "@/public/images/wh-img3.png";
import img4 from "@/public/images/wh-img4.png";
import img5 from "@/public/images/wh-img5.png";
import img6 from "@/public/images/wh-img6.png";

function WhyHarvv() {
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
      heading: "Pre-Approval for Customers",
      subHeading:
        "Pre-approve customers based on their invoice history for faster, smoother transactions.",
      bgSrc: img1.src,
    },
    {
      heading: "White-Label Options",
      subHeading:
        "Offer customized financing solutions under your brand with our white-label options",
      bgSrc: img2.src,
    },
    {
      heading: "Roll-Over Functionality",
      subHeading:
        "Extend payment terms conveniently with our flexible roll-over functionality",
      bgSrc: img3.src,
    },
    {
      heading: "BNPL on Installments",
      subHeading:
        "Provide Buy Now, Pay Later options with manageable, easy installment plans",
      bgSrc: img4.src,
    },
    {
      heading: "Working Capital Loans",
      subHeading:
        "Access additional working capital loans to support your business beyond invoices",
      bgSrc: img5.src,
    },
    {
      heading: "Partner Program",
      subHeading:
        "Join our partner program for exclusive white-labeled marketplace financing solutions",
      bgSrc: img6.src,
    },
  ];

  const slideCount = slides.length;
  const totalSlides = slideCount - slidesToShow;

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalSlides;

  const nextSlide = () => {
    if (canNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (canPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="p-5 md:pt-0 md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-8 mt-0">
      <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="il-services-wrapper flex justify-center items-center flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M7.87695 3.43041V19.6923L12.8373 16.1834L24.1231 8.34044L24.1221 7.83882L19.1618 4.39165V5.77831L12.8373 10.1734V0L7.87695 3.43041Z"
              fill="url(#paint0_linear_6790_3348)"
            />
            <path
              d="M24.1231 28.5696V12.3077L19.1627 15.8166L7.87695 23.6596L7.87792 24.1612L12.8383 27.6084V26.2217L19.1627 21.8266V32L24.1231 28.5696Z"
              fill="url(#paint1_linear_6790_3348)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6790_3348"
                x1="18.6369"
                y1="35.6639"
                x2="4.50191"
                y2="8.48704"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC008C" />
                <stop offset="1" stop-color="#FC6767" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6790_3348"
                x1="18.6369"
                y1="35.6639"
                x2="4.50191"
                y2="8.48704"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EC008C" />
                <stop offset="1" stop-color="#FC6767" />
              </linearGradient>
            </defs>
          </svg>
          <div className="il-services-heading ms-2">Why Harvv</div>
        </div>
      </div>
      <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="w-full flex md:justify-start justify-center items-center flex-col">
          <div className="w-full text-center md:text-start il-industries-serve">
            Why <span className="harvv-clip">Harvv</span>
          </div>
          <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
            More reasons to choose Harvv Financing
          </div>
        </div>
        <div className="w-full flex justify-center gap-3 items-center md:justify-end flex-row">
          <button
            disabled={canPrev === false}
            onClick={prevSlide}
            className="li-slider-buttons flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8333 9.99996H4.16663M4.16663 9.99996L9.99996 15.8333M4.16663 9.99996L9.99996 4.16663"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            disabled={canNext === false}
            onClick={nextSlide}
            className="li-slider-buttons flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16663 9.99996H15.8333M15.8333 9.99996L9.99996 4.16663M15.8333 9.99996L9.99996 15.8333"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full mt-5 flex-shrink-0"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full md:w-72 flex items-start justify-start flex-col">
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <div className="w-full flex justify-center items-center flex-col">
                      <img
                        src={slide.bgSrc}
                        alt="Image"
                        className="h-56 object-contain"
                      />
                    </div>
                    <div className="w-full h-full flex justify-start items-center flex-col">
                      <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                        {slide.heading}
                      </div>
                      <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                        {slide.subHeading}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHarvv;
