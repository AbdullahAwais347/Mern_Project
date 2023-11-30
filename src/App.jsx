import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/logIn";
import SignUp from "./Components/signUp";
import ForgetPassword from "./Components/forgetpassword";
import Otp from "./Components/otp";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/sideBar";
import Dashboard from "./Components/Dashboard";
import OrderManagement from "./Components/OrderManagement";
import InventoryManagement from "./Components/InventoryManagement";
import Feedback from "./Components/Feedback";
import Returns from "./Components/Return";
import Brands from "./Components/Brands";
function App() {
  return (
    <>
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
        <Route path="/forgetPassword2" element={<Otp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/Return" element={<Returns />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Brands" element={<Brands />} />
      </Routes>
    </>
  );
}

export default App;
