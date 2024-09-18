import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ind-bg1.png";
import img2 from "@/public/images/ind-bg2.png";
import img3 from "@/public/images/ind-bg3.png";
import Rating from "@mui/material/Rating";
import bikeImage from "@/public/images/ps-img-bike.png";
import content from "@/public/images/ps-tm-content.png";

function HomePageTestimonials() {
  const isXLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    setSlidesToShow(isXLarge ? 3.2 : isLarge ? 2 : isMedium ? 1 : 1);
  }, [isXLarge, isLarge, isMedium, isSmall]);

  const slides = [
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      tag: "Technology",
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      tag: "Technology",
      rating: 2,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      tag: "Technology",
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      tag: "Technology",
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      tag: "Technology",
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      tag: "Technology",
      rating: 4,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      tag: "Technology",
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      tag: "Technology",
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
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
    <div className="w-full">
      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="w-full hm-top-wrapper p-5 md:p-10 flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col gap-3">
            <div className="flex justify-center items-center flex-row gap-2 ps-badge-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5.45833 6.52083H9M5.45833 9H11.125M5.45833 13.25V14.9043C5.45833 15.2817 5.45833 15.4705 5.5357 15.5674C5.60299 15.6517 5.70502 15.7007 5.81288 15.7006C5.9369 15.7005 6.08427 15.5826 6.37899 15.3468L8.06869 13.995C8.41387 13.7189 8.58645 13.5808 8.77864 13.4827C8.94914 13.3955 9.13064 13.3319 9.31819 13.2934C9.5296 13.25 9.75062 13.25 10.1927 13.25H11.975C13.1651 13.25 13.7602 13.25 14.2147 13.0184C14.6146 12.8147 14.9397 12.4896 15.1434 12.0897C15.375 11.6352 15.375 11.0401 15.375 9.85V6.025C15.375 4.83489 15.375 4.23983 15.1434 3.78527C14.9397 3.38543 14.6146 3.06034 14.2147 2.85661C13.7602 2.625 13.1651 2.625 11.975 2.625H6.025C4.83489 2.625 4.23983 2.625 3.78527 2.85661C3.38543 3.06034 3.06034 3.38543 2.85661 3.78527C2.625 4.23983 2.625 4.83489 2.625 6.025V10.4167C2.625 11.0754 2.625 11.4048 2.69741 11.675C2.8939 12.4083 3.46669 12.9811 4.20001 13.1776C4.47024 13.25 4.7996 13.25 5.45833 13.25Z"
                  stroke="white"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Testimonial</div>
            </div>
            <div className="w-full text-2xl md:text-3xl ps-top-heading text-center">
              Client's Reviews
            </div>
            <div className="w-full text-center ps-top-sub-heading">
              Discover How Harvv Financing Has Helped Businesses Thrive with
              Real Success Stories from Our Clients
            </div>
            <div className="w-full hidden md:flex md:w-4/5 text-center">
              <img src={content.src} alt="" className="object-cover" />
            </div>
            <div className="w-full flex justify-center gap-3 items-center flex-col">
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
                        className="w-full mt-5 flex-shrink-0 flex justify-center items-center"
                        style={{ width: `${100 / slidesToShow}%` }}
                      >
                        <div className="ps-ts-card-wrapper mb-2 w-full md:w-[95%] flex items-start justify-start flex-col">
                          <div className="w-full h-full flex justify-center gap-4 items-center flex-col">
                            <div className="w-full flex justify-center gap-2 md:gap-0 md:justify-between items-center flex-col md:flex-row">
                              <div className="w-full gap-3 flex justify-center md:justify-start items-center flex-col md:flex-row">
                                <div className="h-[40px] w-[44px] text-center rounded-full">
                                  <img
                                    src={slide.imgSrc}
                                    alt="Img"
                                    className="object-cover w-full h-full rounded-full"
                                  />
                                </div>
                                <div className="w-full text-center md:text-start flex flex-col justify-center items-start">
                                  <div className="w-full ps-ts-name text-center md:text-start">
                                    {slide.name}
                                  </div>
                                  <div className="w-full ps-ts-company text-center md:text-start">
                                    {slide.company}
                                  </div>
                                </div>
                              </div>
                              <div className="text-end">
                                <div className="hm-reviews-tag-wrapper flex justify-center items-center flex-row gap-2 md:gap-3">
                                  <div className="hm-reviews-tag-icon-wrapper">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="11"
                                      viewBox="0 0 12 11"
                                      fill="none"
                                    >
                                      <g clip-path="url(#clip0_7790_3825)">
                                        <path
                                          d="M10.1708 3.98562H1.30835M6.62579 7.75214L7.73359 6.64434L6.62579 5.53654M4.85331 5.53654L3.74551 6.64434L4.85331 7.75214M1.30835 3.45388L1.30835 7.17609C1.30835 7.9206 1.30835 8.29286 1.45324 8.57722C1.58069 8.82736 1.78406 9.03072 2.03419 9.15817C2.31856 9.30306 2.69081 9.30306 3.43532 9.30306H8.04377C8.78829 9.30306 9.16054 9.30307 9.44491 9.15817C9.69504 9.03072 9.89841 8.82736 10.0259 8.57722C10.1708 8.29286 10.1708 7.9206 10.1708 7.17609V3.45388C10.1708 2.70937 10.1708 2.33711 10.0259 2.05275C9.89841 1.80261 9.69504 1.59925 9.44491 1.4718C9.16054 1.3269 8.78829 1.3269 8.04378 1.3269L3.43533 1.3269C2.69081 1.3269 2.31856 1.3269 2.03419 1.4718C1.78406 1.59925 1.58069 1.80261 1.45324 2.05275C1.30835 2.33711 1.30835 2.70937 1.30835 3.45388Z"
                                          stroke="#E93A7D"
                                          stroke-width="0.88624"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_7790_3825">
                                          <rect
                                            width="10.6349"
                                            height="10.6349"
                                            fill="white"
                                            transform="translate(0.421997 -0.00244141)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div>{slide.tag}</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full flex justify-center md:justify-start items-center">
                              <Rating
                                sx={{
                                  "& .MuiRating-iconFilled": {
                                    color: "white",
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    color: "white",
                                    opacity: 0.2,
                                  },
                                }}
                                value={slide.rating}
                                readOnly
                              />
                            </div>
                            <div className="w-full ps-ts-review text-center md:text-start">
                              {slide.review}
                            </div>
                            <div className="w-full flex justify-center md:justify-start items-center flex-row gap-3">
                              <div className="ps-ts-rfcs-wrapper flex justify-center items-center gap-3">
                                <div className="ps-ts-read-full">
                                  Read Full Case Study
                                </div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M5.83301 14.1666L14.1663 5.83331M14.1663 5.83331H5.83301M14.1663 5.83331V14.1666"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3 items-center flex-row">
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
                      d="M16.3337 10H4.66699M4.66699 10L10.5003 15.8334M4.66699 10L10.5003 4.16669"
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
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M4.66699 10H16.3337M16.3337 10L10.5003 4.16669M16.3337 10L10.5003 15.8334"
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
  );
}

export default HomePageTestimonials;
