import Navbar from "./Navbar";
import SideBar from "./sideBar";

function OrderManagement() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>
        <div className="m-8 w-3/5">
          <div className="  flex  bg-P_white h-72 p-3 rounded-lg shadow-2xl shadow-shadow_color">
            <h1 className=" text-black text-lg font-bold mt-2">
              Order Managenment
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderManagement;
