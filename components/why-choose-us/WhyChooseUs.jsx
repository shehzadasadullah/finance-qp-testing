import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ch1.png";
import img2 from "@/public/images/ch2.png";
import img3 from "@/public/images/ch3.png";
import img4 from "@/public/images/ch4.png";
import img5 from "@/public/images/ch5.png";
import img6 from "@/public/images/ch6.png";

function WhyChooseUs() {
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
    <div className="p-5 md:pt-[48px] md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-10 mt-5">
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
      <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="w-full flex md:justify-start justify-center items-center flex-col">
          <div className="w-full text-center md:text-start il-industries-serve">
            What makes us your ideal choice
          </div>
          <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
            Discover the Benefits of Harvv Financing for Your Business
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

export default WhyChooseUs;
