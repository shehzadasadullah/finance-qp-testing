import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "../../public/images/industry-images/vertical/cpg.png";
import img2 from "../../public/images/industry-images/vertical/retailers.png";
import img3 from "../../public/images/industry-images/vertical/powersports.png";
import img4 from "../../public/images/industry-images/vertical/solar.png";
import img5 from "../../public/images/industry-images/vertical/d2c-retail.png";
import img6 from "../../public/images/industry-images/vertical/construction.png";
import img7 from "../../public/images/industry-images/vertical/healthCare.png";
import img8 from "../../public/images/industry-images/vertical/technology.png";
import img9 from "../../public/images/industry-images/vertical/agriculture.png";
import img10 from "../../public/images/industry-images/vertical/automotive.png";
import img11 from "../../public/images/industry-images/vertical/fashion.png";
import img12 from "../../public/images/industry-images/vertical/logistics.png";
import img13 from "../../public/images/industry-images/vertical/hospitality.png";
import { useRouter } from "next/router";

function HomePageIndustriesSection() {
  const isXLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setSlidesToShow(isXLarge ? 6.2 : isLarge ? 4 : isMedium ? 3 : 1);
  }, [isXLarge, isLarge, isMedium, isSmall]);

  const slides = [
    {
      url: "#",
      heading: "CPG Distributors and Manufacturers",
      subHeading: "Addressing supply chain financing needs.",
      bgSrc: img1.src,
    },
    {
      url: "#",
      heading: "Retailers",
      subHeading: "Ensuring smooth inventory financing.",
      bgSrc: img2.src,
    },
    {
      url: "/industries/powersports",
      heading: "Powersports Dealers and Manufacturers",
      subHeading: "Supporting high-ticket item financing.",
      bgSrc: img3.src,
    },
    {
      url: "/industries/solar",
      heading: "Solar Power Players",
      subHeading: "Facilitating project financing.",
      bgSrc: img4.src,
    },
    {
      url: "#",
      heading: "D2C Retail",
      subHeading: "Enhancing direct-to-consumer sales with financing.",
      bgSrc: img5.src,
    },
    {
      url: "#",
      heading: "Construction",
      subHeading: "Offering flexibility for project-based invoicing.",
      bgSrc: img6.src,
    },
    {
      url: "#",
      heading: "Healthcare",
      subHeading: "Streamlining payment processes for medical supplies.",
      bgSrc: img7.src,
    },
    {
      url: "#",
      heading: "Technology",
      subHeading: "Accelerating growth with tech-specific financing.",
      bgSrc: img8.src,
    },
    {
      url: "#",
      heading: "Agriculture",
      subHeading: "Empowering farming operations with timely funds.",
      bgSrc: img9.src,
    },
    {
      url: "#",
      heading: "Automotive",
      subHeading:
        "Managing cash flow for auto parts and vehicle manufacturers.",
      bgSrc: img10.src,
    },
    {
      url: "#",
      heading: "Fashion",
      subHeading: "Keeping production lines moving.",
      bgSrc: img11.src,
    },
    {
      url: "#",
      heading: "Logistics",
      subHeading: "Optimizing supply chain finances.",
      bgSrc: img12.src,
    },
    {
      url: "#",
      heading: "Hospitality",
      subHeading: "Enhancing guest experiences through operational financing.",
      bgSrc: img13.src,
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
    <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="flex justify-center px-2 items-center flex-col w-full bg-white md:mt-12 mt-5">
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
                d="M5.66659 10.4166V13.25M11.3333 8.99996V13.25M8.49992 6.16663V13.25M14.1666 5.31663V12.6833C14.1666 13.8734 14.1666 14.4685 13.935 14.923C13.7312 15.3229 13.4062 15.648 13.0063 15.8517C12.5518 16.0833 11.9567 16.0833 10.7666 16.0833H6.23325C5.04314 16.0833 4.44808 16.0833 3.99352 15.8517C3.59368 15.648 3.26859 15.3229 3.06486 14.923C2.83325 14.4685 2.83325 13.8734 2.83325 12.6833V5.31663C2.83325 4.12651 2.83325 3.53146 3.06486 3.0769C3.26859 2.67705 3.59368 2.35197 3.99352 2.14824C4.44808 1.91663 5.04314 1.91663 6.23325 1.91663H10.7666C11.9567 1.91663 12.5518 1.91663 13.0063 2.14824C13.4062 2.35197 13.7312 2.67705 13.935 3.0769C14.1666 3.53146 14.1666 4.12651 14.1666 5.31663Z"
                stroke="#FF27A0"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="il-services-heading ms-2">Services</div>
          </div>
          <button className="il-view-all-button mt-3 md:mt-0">
            View All Industries
          </button>
        </div>
        <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
          <div className="w-full flex md:justify-start justify-center items-center flex-col">
            <div className="w-full text-center md:text-start il-industries-serve">
              13 Industries We Serve
            </div>
            <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
              Tailored Financing Solutions for Every Business Need
            </div>
          </div>
          <div className="w-full flex justify-center gap-3 items-center md:justify-end flex-row">
            <button
              // disabled={canPrev === false}
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
              // disabled={canNext === false}
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
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full mt-5 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${slide.bgSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="il-card-wrapper h-96 w-full md:w-56 flex items-start justify-start flex-col"
                  >
                    <div className="w-full h-full flex justify-center items-center flex-col">
                      <div className="w-full flex justify-end items-center flex-row">
                        <button
                          onClick={() => {
                            router.push(slide.url);
                          }}
                          className="li-card-top-button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H5.83325M14.1666 5.83337V14.1667"
                              stroke="#101828"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="w-full h-full flex justify-end md:items-start items-center flex-col">
                        <div className="mb-2 w-full text-center md:text-start li-card-heading">
                          {slide.heading}
                        </div>
                        <div className="mb-3 w-full text-center md:text-start li-card-subHeading">
                          {slide.subHeading}
                        </div>
                        <button
                          onClick={() => {
                            router.push(slide.url);
                          }}
                          className="w-full li-card-button-bottom flex justify-center gap-2 md:gap-0 md:justify-between items-center flex-row"
                        >
                          <div>Learn More</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334"
                              stroke="#101828"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageIndustriesSection;
