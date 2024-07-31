import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ind-bg1.png";
import img2 from "@/public/images/ind-bg2.png";
import img3 from "@/public/images/ind-bg3.png";
import Rating from "@mui/material/Rating";

function Testimonials() {
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
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      rating: 2,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      rating: 4,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
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
    <div className="flex bg-[#F9FAFB] rounded-[16px] p-5 md:pt-[48px] md:pb-[48px] md:pl-[40px] md:pr-[40px] justify-center items-center flex-col w-full mt-5">
      <div className="md:px-3 w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="il-services-wrapper flex justify-center items-center flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M4.95833 6.52083H8.5M4.95833 9H10.625M4.95833 13.25V14.9043C4.95833 15.2817 4.95833 15.4705 5.0357 15.5674C5.10299 15.6517 5.20502 15.7007 5.31288 15.7006C5.4369 15.7005 5.58427 15.5826 5.87899 15.3468L7.56869 13.995C7.91387 13.7189 8.08645 13.5808 8.27864 13.4827C8.44914 13.3955 8.63064 13.3319 8.81819 13.2934C9.0296 13.25 9.25062 13.25 9.69266 13.25H11.475C12.6651 13.25 13.2602 13.25 13.7147 13.0184C14.1146 12.8147 14.4397 12.4896 14.6434 12.0897C14.875 11.6352 14.875 11.0401 14.875 9.85V6.025C14.875 4.83489 14.875 4.23983 14.6434 3.78527C14.4397 3.38543 14.1146 3.06034 13.7147 2.85661C13.2602 2.625 12.6651 2.625 11.475 2.625H5.525C4.33489 2.625 3.73983 2.625 3.28527 2.85661C2.88543 3.06034 2.56034 3.38543 2.35661 3.78527C2.125 4.23983 2.125 4.83489 2.125 6.025V10.4167C2.125 11.0754 2.125 11.4048 2.19741 11.675C2.3939 12.4083 2.96669 12.9811 3.70001 13.1776C3.97024 13.25 4.2996 13.25 4.95833 13.25Z"
              stroke="#FF27A0"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="il-services-heading ms-2">Testimonials</div>
        </div>
      </div>
      <div className="md:px-3 w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="w-full flex md:justify-start justify-center items-center flex-col">
          <div className="w-full text-center md:text-start il-industries-serve">
            Our Client's Words
          </div>
          <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
            Discover How Harvv Financing Has Helped Businesses Thrive with Real
            Success Stories from Our Clients
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center md:justify-end flex-row">
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
                d="M15.8334 10H4.16669M4.16669 10L10 15.8333M4.16669 10L10 4.16666"
                stroke="#667085"
                stroke-width="1.66667"
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
                d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                stroke="#667085"
                stroke-width="1.66667"
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
                className="w-full mt-5 flex-shrink-0 flex justify-center items-center"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="ts-card-wrapper mb-2 bg-white w-full md:w-[95%] flex items-start justify-start flex-col">
                  <div className="w-full h-full flex justify-center gap-4 items-center flex-col">
                    <div className="w-full flex justify-center gap-3 md:justify-start items-center flex-col md:flex-row">
                      <div className="h-[40px] w-[44px] text-center rounded-full">
                        <img
                          src={slide.imgSrc}
                          alt="Img"
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="w-full text-center md:text-start flex flex-col justify-center items-start">
                        <div className="w-full ts-name text-center md:text-start">
                          {slide.name}
                        </div>
                        <div className="w-full ts-company ext-center md:text-start">
                          {slide.company}
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-start items-center">
                      <Rating value={slide.rating} readOnly />
                    </div>
                    <div className="w-full ts-review text-center md:text-start">
                      {slide.review}
                    </div>
                    <div className="w-full flex justify-center md:justify-start items-center flex-row gap-3">
                      <div className="ts-read-full">Read Full Case Study</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.83334 14.1667L14.1667 5.83333M14.1667 5.83333H5.83334M14.1667 5.83333V14.1667"
                          stroke="#FF27A0"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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

export default Testimonials;
