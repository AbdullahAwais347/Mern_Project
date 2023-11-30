import Navbar from "./Navbar";
import SideBar from "./sideBar";

function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>
        <div className="m-8">
          <div className="  flex bg-off_white w-auto h-auto rounded-xl">
            <div className=" bg-off_white w-1/2 p-2">
              <h1 className=" text-black text-lg font-bold mt-2">
                Activity Overview
              </h1>
            </div>
            <div className=" bg-P_white w-1/2 h-auto p-2 m-5">
              <div className="ml-3">
                <h1 className=" text-black text-lg font-bold">Sales</h1>
                <div className="flex">
                  <p className=" text-light_black">Total Sales : &nbsp; </p>
                  <span className="font-bold">$</span>
                </div>
                <h1 className=" text-black text-lg font-bold mt-4">Products</h1>
                <button className=" mt-3 border-2 border-shadow_color box-border p-2 text-xs rounded-lg">
                  View All
                </button>
                <div className="flex  mt-5">
                  <p className=" text-light_black">Total Products : &nbsp; </p>
                  <span className="font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-auto">
            <div className=" bg-p_white w-48 m-5 ml-0 h-auto shadow-shadow_color shadow-2xl">
              <div className=" p-2">
                <h1 className="text-black text-lg font-bold">Brands</h1>
                <button className=" mt-3 border-2 border-shadow_color box-border p-2 text-xs rounded-lg">
                  View All
                </button>
                <div className="flex  mt-5">
                  <p className=" text-light_black">Total Brands : &nbsp; </p>
                  <span className="font-bold">100</span>
                </div>
              </div>
            </div>
            <div className=" bg-p_white w-48 m-5 h-auto shadow-shadow_color shadow-2xl">
              <div className=" p-2">
                <h1 className="text-black text-lg font-bold">Returns</h1>
                <button className=" mt-3 border-2 border-shadow_color box-border p-2 text-xs rounded-lg">
                  View All
                </button>
                <div className="flex  mt-5">
                  <p className=" text-light_black">Total Returns : &nbsp; </p>
                  <span className="font-bold">100</span>
                </div>
              </div>
            </div>
            <div className="bg-p_white w-48 m-5 mr-0 h-auto shadow-shadow_color shadow-2xl">
              <div className=" p-2">
                <h1 className="text-black text-lg font-bold">Feedback</h1>
                <button className=" mt-3 border-2 border-shadow_color box-border p-2 text-xs rounded-lg">
                  View All
                </button>
                <div className="flex  mt-5">
                  <p className=" text-light_black">Total Feedback : &nbsp; </p>
                  <span className="font-bold">100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
