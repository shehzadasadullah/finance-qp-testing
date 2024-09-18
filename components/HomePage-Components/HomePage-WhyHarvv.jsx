import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/wh-img1.png";
import img2 from "@/public/images/wh-img2.png";
import img3 from "@/public/images/wh-img3.png";
import img4 from "@/public/images/wh-img4.png";
import img5 from "@/public/images/wh-img5.png";

function HomePageWhyHarvv() {
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
      heading: "Flexible Plans",
      subHeading:
        "Harvv offers customizable payment plans and terms that fit your business requirements, ensuring you have the best options for your financial situation.",
      bgSrc: img1.src,
    },
    {
      heading: "Fast Approval Process",
      subHeading:
        "With a streamlined and efficient approval process, Harvv minimizes paperwork and provides quick decisions, allowing you to get started faster.",
      bgSrc: img2.src,
    },
    {
      heading: "Customized Plans",
      subHeading:
        "Harvv allows sellers to offer financing solutions under their own brand, enhancing customer experience and brand loyalty.",
      bgSrc: img3.src,
    },
    {
      heading: "Funds in Your Hands",
      subHeading:
        "Harvv ensures you receive upfront payments for your invoices, maintaining steady cash flow and avoiding delays, so your business can continue running smoothly.",
      bgSrc: img4.src,
    },
    {
      heading: "No Personal Guarantee",
      subHeading:
        "Harvv provides financing without requiring personal guarantees, allowing you to secure capital without risking personal assets. This ensures peace of mind and protects what matters most.",
      bgSrc: img5.src,
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
    <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="bg-[#F9FAFB] rounded-[16px] w-full">
        <div className="p-5 md:pt-0 md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-8 mt-0 gap-4">
          <div className="w-full md:p-5 mt-2 md:mt-2 flex justify-center flex-col items-center">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-full text-center il-industries-serve">
                <span className="harvv-clip">We pride</span> ourselves in...
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <div className="w-full flex justify-center items-center gap-4 flex-col md:flex-row">
              {/* div 1 */}

              <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full flex items-center justify-center flex-col">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <img
                      src={slides[0].bgSrc}
                      alt="Image"
                      className="h-56 object-contain"
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center flex-col">
                    <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                      {slides[0].heading}
                    </div>
                    <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                      {slides[0].subHeading}
                    </div>
                  </div>
                </div>
              </div>

              {/* div 2 */}

              <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full flex items-center justify-center flex-col">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <img
                      src={slides[1].bgSrc}
                      alt="Image"
                      className="h-56 object-contain"
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center flex-col">
                    <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                      {slides[1].heading}
                    </div>
                    <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                      {slides[1].subHeading}
                    </div>
                  </div>
                </div>
              </div>

              {/* div 3 */}

              <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full flex items-center justify-center flex-col">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <img
                      src={slides[2].bgSrc}
                      alt="Image"
                      className="h-56 object-contain"
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center flex-col">
                    <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                      {slides[2].heading}
                    </div>
                    <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                      {slides[2].subHeading}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-4 flex-col md:flex-row">
              {/* div 4 */}

              <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full flex items-center justify-center flex-col">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <img
                      src={slides[3].bgSrc}
                      alt="Image"
                      className="h-56 object-contain"
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center flex-col">
                    <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                      {slides[3].heading}
                    </div>
                    <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                      {slides[3].subHeading}
                    </div>
                  </div>
                </div>
              </div>

              {/* div 5 */}

              <div className="wc-card-wrapper il-card-wrapper border-[0.6px] border-[#EAECF0] bg-white h-96 w-full flex items-center justify-center flex-col">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <img
                      src={slides[4].bgSrc}
                      alt="Image"
                      className="h-56 object-contain"
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center flex-col">
                    <div className="mb-2 w-full text-center md:text-start wc-card-heading">
                      {slides[4].heading}
                    </div>
                    <div className="mb-3 w-full text-center md:text-start wc-card-subHeading">
                      {slides[4].subHeading}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWhyHarvv;
