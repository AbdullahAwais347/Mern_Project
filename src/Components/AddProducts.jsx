import Navbar from "./Navbar";
import SideBar from "./sideBar";
import { useNavigate } from "react-router-dom";
function AddProducts() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>

        <div className="flex flex-col sm:flex-row m-4 sm:m-8 w-3/4">
          <div className="  w-full sm:w-3/4 bg-none h-auto p-3 rounded-lg border-2 border-black ">
            <h1 className="text-black text-lg font-bold">Add Products</h1>
            <div className=" flex flex-col w-auto m-3 h-auto p-1 rounded-lg shadow-2xl shadow-light_black">
              <h1 className="text-black text-lg font-bold h-auto mt-3 p-2 ">
                General
              </h1>
              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" mr-6 border-b-2 border-light_black text-light_blac"
                />
                <select
                  placeholder="Prod Country Origin"
                  className=" cursor-pointer p-1 w-auto mr-6 border-2 sm: mt-3 font-semibold border-light_black text-black rounded-lg "
                >
                  <option value="disabled selected">
                    Prod country origin &nbsp;{" "}
                  </option>
                  <option value="Label2">Label2</option>
                  <option value="Label3">Label3</option>
                  <option value="Label4">Label4</option>
                  <option value="Label5">Label5</option>
                  <option value="Label6">Label6</option>
                </select>
              </div>
              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="SKU Name"
                  className=" border-b-2 border-light_black text-light_black"
                />
              </div>
              <div className=" text-dashBoard_font_color flex text-lg h-auto p-3 mt-4">
                <p className="mr-36">Refundable</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="mr-8"
                >
                  <path
                    d="M18.75 27.5C18.2375 27.5 17.8125 27.075 17.8125 26.5625V3.4375C17.8125 2.925 18.2375 2.5 18.75 2.5C19.2625 2.5 19.6875 2.925 19.6875 3.4375V26.5625C19.6875 27.075 19.2625 27.5 18.75 27.5Z"
                    fill="black"
                  />
                  <path
                    d="M22.5 25H18.75V5H22.5C25.2625 5 27.5 7.2375 27.5 10V20C27.5 22.7625 25.2625 25 22.5 25ZM7.5 5C4.7375 5 2.5 7.2375 2.5 10V20C2.5 22.7625 4.7375 25 7.5 25H13.75C14.4375 25 15 24.4375 15 23.75V6.25C15 5.5625 14.4375 5 13.75 5H7.5ZM9.6875 19.375C9.6875 19.8875 9.2625 20.3125 8.75 20.3125C8.2375 20.3125 7.8125 19.8875 7.8125 19.375V10.625C7.8125 10.1125 8.2375 9.6875 8.75 9.6875C9.2625 9.6875 9.6875 10.1125 9.6875 10.625V19.375Z"
                    fill="black"
                  />
                </svg>
                <p>Locally made Product</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="ml-8"
                >
                  <path
                    d="M18.75 27.5C18.2375 27.5 17.8125 27.075 17.8125 26.5625V3.4375C17.8125 2.925 18.2375 2.5 18.75 2.5C19.2625 2.5 19.6875 2.925 19.6875 3.4375V26.5625C19.6875 27.075 19.2625 27.5 18.75 27.5Z"
                    fill="black"
                  />
                  <path
                    d="M22.5 25H18.75V5H22.5C25.2625 5 27.5 7.2375 27.5 10V20C27.5 22.7625 25.2625 25 22.5 25ZM7.5 5C4.7375 5 2.5 7.2375 2.5 10V20C2.5 22.7625 4.7375 25 7.5 25H13.75C14.4375 25 15 24.4375 15 23.75V6.25C15 5.5625 14.4375 5 13.75 5H7.5ZM9.6875 19.375C9.6875 19.8875 9.2625 20.3125 8.75 20.3125C8.2375 20.3125 7.8125 19.8875 7.8125 19.375V10.625C7.8125 10.1125 8.2375 9.6875 8.75 9.6875C9.2625 9.6875 9.6875 10.1125 9.6875 10.625V19.375Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex flex-col sm:flex-row mt-4">
                <textarea className=" m-3 mt-0 w-full h-40 sm:h-72 border-2 border-light_black text-black"></textarea>
              </div>
              <p className=" ml-3 text-light_black">Addition Information</p>
              <div className=" flex w-full">
                <textarea className="m-3 mt-0 w-full h-40 sm:h-72 border-2 border-light_black text-black"></textarea>
              </div>
              <div className="m-3 flex justify-end mt-4">
                <button className=" bg-black text-P_white font-medium p-1 ml-4 sm:ml-6 w-32 sm:w-44 text-xl rounded-2xl">
                  Add Variation
                </button>
                <button
                  className=" bg-black text-P_white font-medium p-1 ml-4 sm:ml-8 w-32 sm:w-32 text-xl rounded-2xl"
                  onClick={() => {
                    navigate("/InventoryManagement");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
