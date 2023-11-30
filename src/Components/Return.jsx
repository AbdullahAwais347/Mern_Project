import Navbar from "./Navbar";
import SideBar from "./sideBar";

function Returns() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>
        <div className="m-8 w-3/5">
          <div className="  flex bg-off_white h-72 p-3 rounded-lg">
            <h1 className=" text-black text-lg font-bold mt-2">Return </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Returns;
