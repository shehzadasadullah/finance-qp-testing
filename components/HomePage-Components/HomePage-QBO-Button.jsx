import React from "react";
import qb_Logo from "@/public/images/quickBooks_logo.png";

function HomePageQBOButton() {
  return (
    <div className="w-full hidden md:flex justify-center mt-3 mb-5 items-center">
      <button className="il-view-all-button gap-2 flex justify-center items-center w-full md:w-auto mt-3 md:mt-0">
        <img
          src={qb_Logo.src}
          alt="Image"
          style={{ height: "20px", width: "20px" }}
        />
        <div>Sign up with QuickBooks</div>
      </button>
    </div>
  );
}

export default HomePageQBOButton;
