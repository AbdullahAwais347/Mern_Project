import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./sideBar";

function InventoryManagement() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>
        <div className="flex m-8 w-auto">
          <div className="  flex flex-col bg-none h-auto p-3 rounded-lg ">
            <div className="flex ">
              <h1 className=" text-black text-lg font-bold h-auto">
                Inventory Managenment
              </h1>
              <button
                className=" mt-2 p-2 ml-96 mr-20 border-2 border-light_black text-light_black rounded-lg"
                onClick={() => {
                  navigate("/AddProducts");
                }}
              >
                {" "}
                Add Product
              </button>
            </div>
            <div className="h-auto p-3 mt-4">
              <input
                type="text"
                placeholder="Product Name"
                className=" mr-6 border-b-2 border-light_black text-light_blac"
              />

              <input
                type="text"
                placeholder="SKU Name"
                className=" border-b-2 border-light_black text-light_black"
              />
            </div>
            <div className="h-auto p-3 mt-4">
              <select
                placeholder="Availability"
                className=" cursor-pointer p-1 w-28 mr-6 border-2 hover:p-2 hover:w-32 border-light_black text-black rounded-lg "
              >
                <option value="disabled selected">Availability</option>
                <option value="Label2">Label2</option>
                <option value="Label3">Label3</option>
                <option value="Label4">Label4</option>
                <option value="Label5">Label5</option>
                <option value="Label6">Label6</option>
              </select>
              <select
                placeholder="Status"
                className=" cursor-pointer p-1 w-20 border-2 hover:p-2 hover:w-24 border-light_black text-black rounded-lg"
              >
                <option value="0">Status</option>
                <option value="1">0</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="h-auto p-3 mt-4">
              <input
                type="text"
                placeholder="Starting Price"
                className=" mr-6 border-b-2 border-light_black text-light_black"
              />

              <input
                type="text"
                placeholder="Ending Price"
                className=" border-b-2 border-light_black text-light_black"
              />
            </div>
            <div className="h-auto p-3 mt-4">
              <input
                type="text"
                placeholder="Starting Quantity"
                className=" mr-6 border-b-2 border-light_black text-light_black"
              />

              <input
                type="text"
                placeholder="Ending Quantity"
                className=" border-b-2 border-light_black text-light_black"
              />
            </div>

            <div className="mt-4">
              <button className=" bg-black text-P_white font-medium  p-1 ml-36 w-32 text-xl rounded-2xl">
                Search
              </button>
              <button className=" bg-btn_bg text-P_white font-medium  p-1 ml-16 w-32 text-xl rounded-2xl">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryManagement;
