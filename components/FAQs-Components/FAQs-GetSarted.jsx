import React from "react";

function FAQsGetStarted() {
  return (
    <>
      {/* Ready to Get Started */}

      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-3">
        <div className="w-full ps-tb-wrapper flex justify-center items-center flex-col">
          <div className="w-full ps-tb-div1-wrapper">
            <div className="w-full flex p-5 lg:pt-[48px] lg:pr-[40px] lg:pb-[48px] lg:pl-[40px] justify-center items-center flex-col ps-tb-div2-wrapper">
              <div className="w-full flex justify-center items-center">
                <div className="faq-services-wrapper flex justify-center items-center flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M6.43859 6.87496C6.60512 6.40156 6.93382 6.00237 7.36647 5.7481C7.79912 5.49382 8.3078 5.40087 8.80242 5.48571C9.29704 5.57055 9.74567 5.82771 10.0689 6.21162C10.392 6.59554 10.5689 7.08145 10.5682 7.58329C10.5682 8.99996 8.44317 9.70829 8.44317 9.70829M8.49984 12.5416H8.50692M15.5832 8.99996C15.5832 12.912 12.4119 16.0833 8.49984 16.0833C4.58782 16.0833 1.4165 12.912 1.4165 8.99996C1.4165 5.08794 4.58782 1.91663 8.49984 1.91663C12.4119 1.91663 15.5832 5.08794 15.5832 8.99996Z"
                      stroke="#FFF"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="faq-services-heading ms-2">FAQ's</div>
                </div>
              </div>
              <div className="w-full text-center tb-main-heading mt-2">
                Ask a Question
              </div>
              <div className="w-full lg:w-[40%] tb-sub-heading text-center mt-2">
                Need more info or have a specific query? Use the box below to
                ask your question. We’re all ears!
              </div>
              <div className="w-full text-center tb-main-heading mt-2">
                <textarea
                  placeholder="Type your question..."
                  name="textarea"
                  className="faq-textarea w-full lg:w-[40%]"
                  id=""
                  rows={4}
                ></textarea>
              </div>
              <button className="ps-il-view-all-button mt-5 w-full lg:w-[20%]">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQsGetStarted;
