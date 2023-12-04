import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/logIn";
import SignUp from "./Pages/signUp";
import ForgetPassword from "./Pages/forgetpassword";
import Otp from "./Pages/otp";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/sideBar";
import Dashboard from "./Pages/Dashboard";
import OrderManagement from "./Components/OrderManagement";
import InventoryManagement from "./Components/InventoryManagement";
import Feedback from "./Components/Feedback";
import Returns from "./Components/Return";
import Brands from "./Components/Brands";
import AddProducts from "./Components/AddProducts";
import PersonalInfo from "./Components/PersonalInfo";
function App() {
  return (
    <>
      {/* <PersonalInfo></PersonalInfo> */}
      {/* <Navbar></Navbar>
      <div className=" flex">
        <SideBar></SideBar>
        <Dashboard></Dashboard>
      </div> */}
      {/* <Dashboard></Dashboard> */}
      {/* <LogIn></LogIn> */}
      {/* <SignUp></SignUp> */}
      {/* <ForgetPassword></ForgetPassword> */}
      {/* <ForgorPassword2></ForgorPassword2> */}

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/Return" element={<Returns />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default App;
