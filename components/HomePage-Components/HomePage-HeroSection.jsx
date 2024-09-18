import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "../../public/images/industry-images/horizontal/cpg.png";
import img2 from "../../public/images/industry-images/horizontal/retailers.png";
import img3 from "../../public/images/industry-images/horizontal/powersports.png";
import img4 from "../../public/images/industry-images/horizontal/solar.png";
import img5 from "../../public/images/industry-images/horizontal/d2c-retail.png";
import img6 from "../../public/images/industry-images/horizontal/construction.png";
import img7 from "../../public/images/industry-images/horizontal/healthCare.png";
import img8 from "../../public/images/industry-images/horizontal/technology.png";
import img9 from "../../public/images/industry-images/horizontal/agriculture.png";
import img10 from "../../public/images/industry-images/horizontal/automotive.png";
import img11 from "../../public/images/industry-images/horizontal/fashion.png";
import img12 from "../../public/images/industry-images/horizontal/logistics.png";
import img13 from "../../public/images/industry-images/horizontal/hospitality.png";
import { useRouter } from "next/router";
import image1 from "@/public/images/hero-img-1.png";
import image2 from "@/public/images/hero-img-2.png";
import image3 from "@/public/images/hero-img-3.png";
import image4 from "@/public/images/hero-img-4.png";

function HomePageHeroSection() {
  const isXLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setSlidesToShow(isXLarge ? 4.2 : isLarge ? 3.2 : isMedium ? 3 : 1);
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
    <>
      <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="w-full rounded-xl md:pt-12 mt-2 flex justify-center items-center flex-col bg-black">
          <div className="hs-wrapper-main rounded-xl w-full h-full">
            <div className="hs-wrapper-2 rounded-xl w-full h-full flex justify-center items-center flex-col">
              <div className="hs-wrapper-3 p-3 md:p-10 rounded-xl flex justify-center items-center flex-col w-full h-full">
                <div className="hs-wrapper3-financing-div-new mt-7 md:mt-0 flex justify-center items-center flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_7472_10906)">
                      <path
                        d="M6.37952 0.124756C5.56772 4.53441 4.90962 5.19247 0.5 6.00428C4.90965 6.81608 5.56772 7.47415 6.37952 11.8838C7.19133 7.47415 7.8494 6.81608 12.259 6.00428C7.8494 5.19247 7.19129 4.53441 6.37952 0.124756ZM12.7609 8.397C12.2446 11.2014 11.826 11.6199 9.02171 12.1361C11.826 12.6524 12.2446 13.071 12.7609 15.8753C13.2771 13.071 13.6957 12.6524 16.5 12.1361C13.6956 11.6199 13.2771 11.2014 12.7609 8.397Z"
                        fill="#FABB05"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7472_10906">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="ms-1">No Personal Guarantee Required</div>
                </div>
                <div className="hs-wrapper3-financing-heading px-3 md:px-[28%] w-full text-center mt-6">
                  Offer your B2B Clients Net 30, 60 and 90 Day terms.
                </div>
                <div className="hs-wrapper3-financing-sub-heading px-3 md:px-0 mt-6 w-full text-center">
                  Get Paid Upfront, Seamless integration, Quick and Simple
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
              <div className="w-full md:mt-12">
                <div className="flex justify-center px-2 items-center flex-col w-full">
                  <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full overflow-hidden">
                      <div
                        className="flex w-full md:gap-3 md:p-4 transition-transform duration-300"
                        style={{
                          transform: `translateX(-${
                            currentIndex * (100 / slidesToShow)
                          }%)`,
                        }}
                      >
                        {slides.map((slide, index) => (
                          <div
                            key={index}
                            className="w-full mt-2 md:mt-5 flex-shrink-0"
                            style={{ width: `${100 / slidesToShow}%` }}
                          >
                            <div
                              style={{
                                backgroundImage: `url(${slide.bgSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                              className="il-card-wrapper2 h-56 md:h-[250px] w-full flex items-start justify-start flex-col"
                            >
                              <div className="w-full h-full flex justify-center items-center flex-col">
                                <div className="w-full h-full flex justify-end md:items-start items-center flex-col">
                                  <div className="mb-2 w-full text-center md:text-start li-card-heading">
                                    {slide.heading}
                                  </div>
                                  <div className="mb-3 w-full text-center md:text-start li-card-subHeading">
                                    {slide.subHeading}
                                  </div>
                                  <div className="w-full flex justify-between item-center gap-3 flex-row">
                                    <button
                                      onClick={() => {
                                        router.push(slide.url);
                                      }}
                                      className="w-full li-card-button-bottom2 flex justify-start items-center flex-row"
                                    >
                                      <div className="w-full text-start">
                                        Learn More
                                      </div>
                                    </button>
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
                                          stroke="#FF007A"
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
                        ))}
                      </div>
                    </div>
                    <div className="w-full flex justify-center gap-3 md:gap-5 pt-4 md:pt-0 pb-4 items-center flex-row">
                      <button
                        // disabled={canPrev === false}
                        onClick={prevSlide}
                        className="ps-li-slider-buttons flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M16.3333 9.99996H4.66663M4.66663 9.99996L10.5 15.8333M4.66663 9.99996L10.5 4.16663"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>

                      <button
                        // disabled={canNext === false}
                        onClick={nextSlide}
                        className="ps-li-slider-buttons flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4.16669 9.99996H15.8334M15.8334 9.99996L10 4.16663M15.8334 9.99996L10 15.8333"
                            stroke="white"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageHeroSection;
