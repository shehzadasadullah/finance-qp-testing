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

function IndustriesSliderHeroSection() {
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
    <div className="flex justify-center px-2 items-center flex-col w-full">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full overflow-hidden">
          <div
            className="flex w-full md:gap-3 md:p-4 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
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
                          <div className="w-full text-start">Learn More</div>
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
            disabled={canPrev === false}
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
            disabled={canNext === false}
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
  );
}

export default IndustriesSliderHeroSection;
