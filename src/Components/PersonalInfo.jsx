import Navbar from "./Navbar";
import SideBar from "./sideBar";

function PersonalInfo() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>

        <div className="flex flex-col sm:flex-row m-4 sm:m-8 w-3/4">
          <div className="  w-full sm:w-3/4 bg-none h-auto p-3 rounded-lg border-2 border-black ">
            <div className=" flex flex-col w-auto m-3 h-auto p-1 rounded-lg shadow-2xl shadow-light_black">
              <h1 className="text-black text-xl font-bold h-auto mt-3 p-2 ">
                Personal Information
              </h1>
              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="  border-b-2 w-1/4 border-light_black text-light_blac"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className=" border-b-2 w-1/4 ml-16 border-light_black text-light_black"
                />
              </div>

              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className=" mr-6 border-b-2 w-1/4 border-light_black text-light_blac"
                />

                <input
                  type="text"
                  placeholder="Address Line 2"
                  className=" border-b-2 w-1/4 ml-8 border-light_black text-light_black"
                />
                <select
                  placeholder="City"
                  className=" cursor-pointer w-1/4 p-1  ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black "
                >
                  <option value="disabled selected">City &nbsp; </option>
                  <option value="Label2">Lahore</option>
                  <option value="Label3">Gujranwala</option>
                  <option value="Label4">Islamabad</option>
                  <option value="Label5">Faisalabad</option>
                  <option value="Label6">Sahiwal</option>
                </select>
              </div>
              <div className="h-auto p-3 mt-4">
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">
                    Province/State &nbsp;{" "}
                  </option>
                  <option value="Label2">Punjab</option>
                  <option value="Label3">KPK</option>
                  <option value="Label4">Balochistan</option>
                  <option value="Label5">Sindh</option>
                  <option value="Label6">Azad Kashmir</option>
                </select>
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Country &nbsp; </option>
                  <option value="Label2">Pakistan</option>
                </select>
              </div>
              <div className="h-auto p-3 mt-4">
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Mobile &nbsp; </option>
                  <option value="Label2">Iphone</option>
                  <option value="Label3">Android</option>
                </select>
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black"
                >
                  <option value="disabled selected">Dob &nbsp; </option>
                  <option value="Label2"></option>
                </select>
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Gender &nbsp; </option>
                  <option value="Label1">Male</option>
                  <option value="Label1">Female</option>
                  <option value="Label1">Other</option>
                </select>
              </div>
              <div className="mb-8 mt-5 flex justify-end mr-8">
                <button className=" bg-black text-P_white font-medium p-1 sm:w-32 text-xl rounded-2xl">
                  Submit
                </button>
              </div>
            </div>

            <div className=" flex flex-col w-auto m-3 mt-16 h-auto p-1 rounded-lg shadow-2xl shadow-light_black">
              <h1 className="text-black text-xl font-bold h-auto mt-3 p-2 ">
                Garage Information
              </h1>
              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" mr-6 border-b-2 w-1/4 border-light_black text-light_blac"
                />
              </div>

              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className=" mr-6 border-b-2 w-1/4 border-light_black text-light_blac"
                />

                <input
                  type="text"
                  placeholder="Address Line 2"
                  className=" border-b-2 w-1/4 ml-8 border-light_black text-light_black"
                />
                <select
                  placeholder="City"
                  className=" cursor-pointer w-1/4 p-1  ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black "
                >
                  <option value="disabled selected">City &nbsp; </option>
                  <option value="Label2">Lahore</option>
                  <option value="Label3">Gujranwala</option>
                  <option value="Label4">Islamabad</option>
                  <option value="Label5">Faisalabad</option>
                  <option value="Label6">Sahiwal</option>
                </select>
              </div>
              <div className="h-auto p-3 mt-4">
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">
                    Province/State &nbsp;{" "}
                  </option>
                  <option value="Label2">Punjab</option>
                  <option value="Label3">KPK</option>
                  <option value="Label4">Balochistan</option>
                  <option value="Label5">Sindh</option>
                  <option value="Label6">Azad Kashmir</option>
                </select>
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 ml-16 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Country &nbsp; </option>
                  <option value="Label2">Pakistan</option>
                </select>
                <input
                  type="text"
                  placeholder="Pin Location"
                  className=" border-b-2 ml-16  w-1/4 border-light_black text-light_black"
                />
              </div>
              <div className="h-auto p-3 mt-4">
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 w-1/4 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Mobile &nbsp; </option>
                  <option value="Label2">Iphone</option>
                  <option value="Label3">Android</option>
                </select>
                <select
                  placeholder=""
                  className=" cursor-pointer p-1 ml-16 w-1/4 border-b-2 sm: mt-3 font-semibold border-light_black text-light_black  "
                >
                  <option value="disabled selected">Mobile2 &nbsp; </option>
                  <option value="Label2">Iphone</option>
                  <option value="Label3">Android</option>
                </select>
              </div>
              <div className="mb-8 mt-5 flex justify-end mr-8">
                <button className=" bg-black text-P_white font-medium p-1 sm:w-32 text-xl rounded-2xl">
                  Submit
                </button>
              </div>
            </div>

            <div className=" flex flex-col w-auto m-3 mt-16 h-auto p-1 rounded-lg shadow-2xl shadow-light_black">
              <h1 className="text-black text-xl font-bold h-auto mt-3 p-2 ">
                Reset Password
              </h1>
              <div className="h-auto p-3 mt-4">
                <input
                  type="text"
                  placeholder="Old Password"
                  className="  border-b-2 w-1/4 border-light_black text-light_blac"
                />
                <input
                  type="text"
                  placeholder="New Password"
                  className="  border-b-2 ml-16 w-1/4 border-light_black text-light_blac"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="  border-b-2 ml-16 w-1/4 border-light_black text-light_blac"
                />
              </div>

              <div className="mb-8 mt-5 flex justify-end mr-8">
                <button className=" bg-black text-P_white font-medium p-1 sm:w-32 text-xl rounded-2xl">
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
export default PersonalInfo;
