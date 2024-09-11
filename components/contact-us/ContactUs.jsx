import Link from "next/link";
import React from "react";

function ContactUs() {
  return (
    <div className="p-5 md:pt-0 md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-8 mt-0">
      <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="il-services-wrapper flex justify-center items-center flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.48443 8.57534C6.68337 7.77429 6.05085 6.86853 5.58685 5.90211C5.54694 5.81899 5.52698 5.77742 5.51165 5.72483C5.45717 5.53793 5.4963 5.30842 5.60965 5.15013C5.64154 5.10559 5.67964 5.06749 5.75585 4.99128C5.98892 4.75821 6.10546 4.64167 6.18165 4.52449C6.46898 4.08256 6.46898 3.51284 6.18165 3.07091C6.10546 2.95373 5.98892 2.83719 5.75585 2.60412L5.62594 2.47421C5.27164 2.11991 5.0945 1.94277 4.90424 1.84654C4.52587 1.65516 4.07903 1.65516 3.70065 1.84654C3.5104 1.94277 3.33325 2.11992 2.97895 2.47421L2.87386 2.5793C2.52078 2.93238 2.34424 3.10892 2.20941 3.34894C2.0598 3.61528 1.95222 4.02894 1.95313 4.33442C1.95395 4.60972 2.00735 4.79787 2.11416 5.17417C2.68814 7.19643 3.77112 9.10467 5.36311 10.6967C6.95509 12.2886 8.86333 13.3716 10.8856 13.9456C11.2619 14.0524 11.45 14.1058 11.7253 14.1066C12.0308 14.1075 12.4445 14 12.7108 13.8504C12.9508 13.7155 13.1274 13.539 13.4805 13.1859L13.5856 13.0808C13.9398 12.7265 14.117 12.5494 14.2132 12.3591C14.4046 11.9807 14.4046 11.5339 14.2132 11.1555C14.117 10.9653 13.9398 10.7881 13.5856 10.4338L13.4556 10.3039C13.2226 10.0708 13.106 9.95431 12.9889 9.87812C12.5469 9.59079 11.9772 9.59079 11.5353 9.87812C11.4181 9.95431 11.3016 10.0708 11.0685 10.3039C10.9923 10.3801 10.9542 10.4182 10.9096 10.4501C10.7513 10.5635 10.5218 10.6026 10.3349 10.5481C10.2823 10.5328 10.2408 10.5128 10.1577 10.4729C9.19124 10.0089 8.28548 9.37639 7.48443 8.57534Z"
              fill="#FF27A0"
            />
          </svg>
          <div className="il-services-heading ms-2">Contact</div>
        </div>
      </div>
      <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
        <div className="w-full flex md:justify-start justify-center items-center flex-col">
          <div className="w-full text-center md:text-start il-industries-serve">
            Get in Touch with Us
          </div>
          <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
            Reach out to us for inquiries, support, or partnership
            opportunities. We're here to assist you!
          </div>
        </div>
      </div>
      <div className="w-full mt-5 md:mt-12">
        <div className="w-full flex justify-center items-center md:items-start flex-col md:flex-row gap-3 md:gap-6">
          <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-3 md:gap-6">
            <div className="w-full cu-details-wrapper flex justify-center items-center flex-col md:flex-row gap-3">
              <div className="cu-icon-wrapper flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M25.0832 21L17.3333 14M10.6666 14L2.91663 21M2.33325 8.16663L11.859 14.8346C12.6304 15.3746 13.016 15.6446 13.4356 15.7492C13.8061 15.8415 14.1937 15.8415 14.5643 15.7492C14.9838 15.6446 15.3695 15.3746 16.1408 14.8346L25.6666 8.16663M7.93325 23.3333H20.0666C22.0268 23.3333 23.0069 23.3333 23.7556 22.9518C24.4141 22.6163 24.9496 22.0808 25.2851 21.4223C25.6666 20.6736 25.6666 19.6935 25.6666 17.7333V10.2666C25.6666 8.30644 25.6666 7.32635 25.2851 6.57766C24.9496 5.91909 24.4141 5.38366 23.7556 5.0481C23.0069 4.66663 22.0268 4.66663 20.0666 4.66663H7.93325C5.97307 4.66663 4.99298 4.66663 4.24429 5.0481C3.58572 5.38366 3.05029 5.91909 2.71473 6.57766C2.33325 7.32635 2.33325 8.30644 2.33325 10.2666V17.7333C2.33325 19.6935 2.33325 20.6736 2.71473 21.4223C3.05029 22.0808 3.58572 22.6163 4.24429 22.9518C4.99298 23.3333 5.97307 23.3333 7.93325 23.3333Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="w-full cu-inner-heading text-center md:text-start">
                  You can email us here
                </div>
                <div className="w-full text-center cu-inner-sub-heading md:text-start">
                  <Link
                    target="_blank"
                    href="mailto:b2b@harvv.com"
                    className=""
                  >
                    b2b@harvv.com
                  </Link>
                </div>
              </div>
              <Link
                target="_blank"
                href="mailto:b2b@harvv.com"
                className="flex justify-center items-center cu-icon2-wrapper"
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
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full cu-details-wrapper flex justify-center items-center flex-col md:flex-row gap-3">
              <div className="cu-icon-wrapper flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M16.3912 7.00004C17.5307 7.22237 18.578 7.77967 19.3989 8.60063C20.2199 9.42159 20.7772 10.4688 20.9995 11.6084M16.3912 2.33337C18.7587 2.59638 20.9664 3.65658 22.6518 5.33988C24.3372 7.02319 25.4002 9.22955 25.6662 11.5967M11.931 16.1736C10.5292 14.7718 9.42224 13.1867 8.61024 11.4955C8.5404 11.35 8.50547 11.2773 8.47864 11.1852C8.3833 10.8581 8.45179 10.4565 8.65013 10.1795C8.70595 10.1016 8.77263 10.0349 8.90599 9.90152C9.31387 9.49364 9.5178 9.28971 9.65114 9.08463C10.154 8.31126 10.154 7.31425 9.65114 6.54088C9.5178 6.3358 9.31387 6.13187 8.90599 5.72399L8.67864 5.49664C8.05863 4.87663 7.74862 4.56662 7.41568 4.39822C6.75352 4.0633 5.97155 4.0633 5.30939 4.39822C4.97645 4.56662 4.66644 4.87663 4.04642 5.49664L3.86252 5.68055C3.24462 6.29845 2.93567 6.60739 2.69972 7.02743C2.4379 7.49352 2.24964 8.21743 2.25123 8.75202C2.25266 9.23379 2.34612 9.56305 2.53303 10.2216C3.53749 13.7605 5.43271 17.1 8.21869 19.8859C11.0047 22.6719 14.3441 24.5671 17.883 25.5716C18.5416 25.7585 18.8708 25.852 19.3526 25.8534C19.8872 25.855 20.6111 25.6667 21.0772 25.4049C21.4972 25.1689 21.8062 24.86 22.4241 24.2421L22.608 24.0582C23.228 23.4382 23.538 23.1282 23.7064 22.7952C24.0413 22.1331 24.0413 21.3511 23.7064 20.6889C23.538 20.356 23.228 20.046 22.608 19.426L22.3806 19.1986C21.9728 18.7908 21.7688 18.5868 21.5637 18.4535C20.7904 17.9507 19.7934 17.9507 19.02 18.4535C18.8149 18.5868 18.611 18.7908 18.2031 19.1986C18.0697 19.332 18.0031 19.3987 17.9251 19.4545C17.6481 19.6528 17.2465 19.7213 16.9194 19.626C16.8274 19.5991 16.7546 19.5642 16.6091 19.4944C14.9179 18.6824 13.3328 17.5755 11.931 16.1736Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="w-full cu-inner-heading text-center md:text-start">
                  Or give us a call
                </div>
                <div className="w-full text-center cu-inner-sub-heading md:text-start">
                  <Link href="tel:+18449003096" target="_blank">
                    +1 (844) 900-3096
                  </Link>
                </div>
              </div>
              <Link
                href="tel:+18449003096"
                target="_blank"
                className="flex justify-center items-center cu-icon2-wrapper"
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
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full cu-details-wrapper flex justify-center items-center flex-col md:flex-row gap-3">
              <div className="cu-icon-wrapper flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 26.25C20.7655 26.25 26.25 20.7655 26.25 14C26.25 7.23451 20.7655 1.75 14 1.75C7.23451 1.75 1.75 7.23451 1.75 14C1.75 16.197 2.32837 18.259 3.34117 20.0418L1.75 26.25L8.1505 24.7658C9.8887 25.7123 11.8816 26.25 14 26.25ZM14 24.3654C19.7246 24.3654 24.3654 19.7246 24.3654 14C24.3654 8.27536 19.7246 3.63462 14 3.63462C8.27536 3.63462 3.63462 8.27536 3.63462 14C3.63462 16.2103 4.32644 18.259 5.50536 19.9414L4.57692 23.4231L8.11994 22.5373C9.79069 23.6902 11.8165 24.3654 14 24.3654Z"
                    fill="white"
                  />
                  <path
                    d="M10.9375 8.31246C10.6463 7.72746 10.1995 7.77925 9.74809 7.77925C8.94142 7.77925 7.68359 8.74549 7.68359 10.5438C7.68359 12.0176 8.33302 13.6308 10.5214 16.0442C12.6333 18.3732 15.4082 19.578 17.7119 19.537C20.0156 19.496 20.4896 17.5136 20.4896 16.8441C20.4896 16.5474 20.3055 16.3993 20.1786 16.3591C19.3936 15.9823 17.9457 15.2803 17.6162 15.1484C17.2868 15.0165 17.1148 15.1949 17.0078 15.292C16.7091 15.5767 16.1168 16.4157 15.9141 16.6045C15.7113 16.7932 15.409 16.6977 15.2832 16.6263C14.8203 16.4406 13.5651 15.8822 12.5645 14.9124C11.3272 13.7129 11.2545 13.3002 11.0214 12.9328C10.8349 12.639 10.9718 12.4586 11.0401 12.3798C11.3067 12.0722 11.6748 11.5973 11.8399 11.3613C12.0049 11.1253 11.8739 10.767 11.7953 10.5438C11.4571 9.58395 11.1705 8.78047 10.9375 8.31246Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="w-full cu-inner-heading text-center md:text-start">
                  WhatsApp
                </div>
                <div className="w-full text-center cu-inner-sub-heading md:text-start">
                  <Link href="https://wa.me/18449003096" target="_blank">
                    +1 (844) 900-3096
                  </Link>
                </div>
              </div>
              <Link
                href="https://wa.me/18449003096"
                target="_blank"
                className="flex justify-center items-center cu-icon2-wrapper"
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
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full cu-details-wrapper flex justify-center items-center flex-col md:flex-row gap-3">
              <div className="cu-icon-wrapper flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M14.0001 15.1667C15.9331 15.1667 17.5001 13.5997 17.5001 11.6667C17.5001 9.73371 15.9331 8.16671 14.0001 8.16671C12.0671 8.16671 10.5001 9.73371 10.5001 11.6667C10.5001 13.5997 12.0671 15.1667 14.0001 15.1667Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.0001 25.6667C18.6667 21 23.3334 16.8214 23.3334 11.6667C23.3334 6.51205 19.1547 2.33337 14.0001 2.33337C8.84542 2.33337 4.66675 6.51205 4.66675 11.6667C4.66675 16.8214 9.33342 21 14.0001 25.6667Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="w-full cu-inner-heading text-center md:text-start">
                  Location
                </div>
                <div
                  onClick={() => {
                    const generateGoogleMapsUrl = (locationText) => {
                      const encodedLocation = encodeURIComponent(locationText);
                      return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
                    };

                    const locationText =
                      "2451 W Grapevine Circle, Suite 565, Grapevine, TX 75028";
                    const googleMapsUrl = generateGoogleMapsUrl(locationText);
                    window.open(googleMapsUrl, "_blank");
                  }}
                  className="w-full cursor-pointer text-center cu-inner-sub-heading md:text-start"
                >
                  2451 W Grapevine Circle, Suite 565, Grapevine, TX 75028
                </div>
              </div>
              <div
                onClick={() => {
                  const generateGoogleMapsUrl = (locationText) => {
                    const encodedLocation = encodeURIComponent(locationText);
                    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
                  };

                  const locationText =
                    "2451 W Grapevine Circle, Suite 565, Grapevine, TX 75028";
                  const googleMapsUrl = generateGoogleMapsUrl(locationText);
                  window.open(googleMapsUrl, "_blank");
                }}
                className="cursor-pointer flex justify-center items-center cu-icon2-wrapper"
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
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-2 cu-form-wrapper flex justify-center items-center flex-col">
            <div className="w-full text-center md:text-start cu-form-heading">
              Send Us a Message
            </div>
            <div className="w-full text-center md:text-start mt-3 cu-form-sub-heading">
              Use our convenient contact form to reach out with questions,
              feedback, or collaboration inquiries.
            </div>
            <div className="mt-6 w-full">
              <div class="input-container w-full">
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16 17.5H14.5V16C14.5 15.4033 14.2629 14.831 13.841 14.409C13.419 13.9871 12.8467 13.75 12.25 13.75H7.75C7.15326 13.75 6.58097 13.9871 6.15901 14.409C5.73705 14.831 5.5 15.4033 5.5 16V17.5H4V16C4 15.0054 4.39509 14.0516 5.09835 13.3483C5.80161 12.6451 6.75544 12.25 7.75 12.25H12.25C13.2446 12.25 14.1984 12.6451 14.9017 13.3483C15.6049 14.0516 16 15.0054 16 16V17.5ZM10 10.75C9.40905 10.75 8.82389 10.6336 8.27792 10.4075C7.73196 10.1813 7.23588 9.84984 6.81802 9.43198C6.40016 9.01412 6.06869 8.51804 5.84254 7.97208C5.6164 7.42611 5.5 6.84095 5.5 6.25C5.5 5.65905 5.6164 5.07389 5.84254 4.52792C6.06869 3.98196 6.40016 3.48588 6.81802 3.06802C7.23588 2.65016 7.73196 2.31869 8.27792 2.09254C8.82389 1.8664 9.40905 1.75 10 1.75C11.1935 1.75 12.3381 2.22411 13.182 3.06802C14.0259 3.91193 14.5 5.05653 14.5 6.25C14.5 7.44347 14.0259 8.58807 13.182 9.43198C12.3381 10.2759 11.1935 10.75 10 10.75ZM10 9.25C10.7956 9.25 11.5587 8.93393 12.1213 8.37132C12.6839 7.80871 13 7.04565 13 6.25C13 5.45435 12.6839 4.69129 12.1213 4.12868C11.5587 3.56607 10.7956 3.25 10 3.25C9.20435 3.25 8.44129 3.56607 7.87868 4.12868C7.31607 4.69129 7 5.45435 7 6.25C7 7.04565 7.31607 7.80871 7.87868 8.37132C8.44129 8.93393 9.20435 9.25 10 9.25Z"
                      fill="#868C98"
                    />
                  </svg>
                </span>
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="mt-3 w-full">
              <div class="input-container w-full">
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
                      fill="#868C98"
                    />
                  </svg>
                </span>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="mt-3 w-full">
              <textarea
                className="h-24 w-full cu-form-textarea"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-3 w-full">
              <button className="w-full cu-form-button-submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
