import { useNavigate } from "react-router-dom";
import React from "react";

function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex bg-off_white bg-auto w-full h-full">
        <div className=" w-1/2">
          <img
            className="ml-3 w-3/4 h-3/3"
            src="/assets/PartShop-logos_black 1.png"
            alt="img"
          />
        </div>
        <div className="flex flex-col w-1/2 ml-4 ">
          <form
            action="#"
            className="flex flex-col w-80 justify-center items-center ml-6 mr-6 mt-20 h-96 bg-P_white shadow-md shadow-shadow_color "
          >
            <h1 className=" font-bold text-xl ">Forget Password</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="6"
              viewBox="0 0 321 6"
              fill="none"
            >
              <path d="M0 3H320.1" stroke="black" stroke-width="5" />
            </svg>
            <path
              opacity="0.7"
              d="M0 3L70 3"
              // stroke="black"
              stroke-width="5"
            />

            <input
              type="text"
              placeholder="Email"
              className=" mt-10 border-b-2 border-light_black text-light_black"
            />
            <input
              type="text"
              placeholder="Username"
              className=" border-b-2 border-light_black mt-5"
            />

            <button
              className=" mt-10 mb-8 p-1 bg-black rounded-lg w-36 text-P_white"
              onClick={() => {
                navigate("/forgetPassword2");
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
