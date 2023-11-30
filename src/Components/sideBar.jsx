import { useNavigate } from "react-router-dom";
import React from "react";

function sideBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-52 h-auto mb-auto bg-off_white border-r-2 border-b-2 border-shadow_color">
        <ul className=" mt-2">
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer drop-shadow-3xl shadow-lg shadow-shadow_color"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            DashBoard
          </li>
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer  shadow-2xl  shadow-shadow_color"
            onClick={() => {
              navigate("/OrderManagement");
            }}
          >
            Order Management
          </li>
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer shadow-inner shadow-shadow_color"
            onClick={() => {
              navigate("/InventoryManagement");
            }}
          >
            Inventory Management
          </li>
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer shadow-inner shadow-shadow_color "
            onClick={() => {
              navigate("/Return");
            }}
          >
            Returns
          </li>
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer shadow-inner shadow-shadow_color"
            onClick={() => {
              navigate("/Feedback");
            }}
          >
            Feedback
          </li>
          <li
            className=" bg-P_white text-dashBoard_font_color text-base font-semibold p-4 cursor-pointer drop-shadow-3xl shadow-lg shadow-shadow_color"
            onClick={() => {
              navigate("/Brands");
            }}
          >
            Brands
          </li>
        </ul>
      </div>
    </>
  );
}
export default sideBar;
