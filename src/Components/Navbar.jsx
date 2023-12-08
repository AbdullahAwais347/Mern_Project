import { useNavigate } from "react-router-dom";
import React from "react";

function Navrbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-off_white bg-auto w-full h-full">
        <div className=" flex h-16 bg-Nav_bar_bg_color border-b-2 border-light_black">
          <img
            src="\assets\logo_nav.png"
            alt="Logo"
            className="w-36 h-24 ml-2"
          />
          <h1 className="flex items-center ml-auto font-bold text-xl">
            Seller Name
          </h1>
          <div className="flex items-center ml-auto mr-5">
            <img
              src="\assets\Vector.png"
              alt="vector"
              className=" w-4 mr-5 cursor-pointer"
              onClick={() => {
                navigate("/PersonalInfo");
              }}
            />

            <img
              src="\assets\notification.png"
              alt="vector"
              className=" w-6 mr-5 cursor-pointer"
            />

            <img
              src="\assets\logoutcurve.png"
              alt="vector"
              className=" w-6 mr-5 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navrbar;
