import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();

  const onFNameChange = (e) => {
    setFName(e.target.value);
  };
  const onLNameChange = (lname) => {
    setLName(lName);
  };

  const onUsernameChange = () => {
    setUsername(username);
  };
  const onEmailChange = () => {
    setEmail(email);
  };
  const onPasswordChange = () => {
    setPassword(password);
  };

  const onMobileChange = () => {
    setMobile(mobile);
  };

  const signUp = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signup", {
      fName: fName,
      lName: lName,
      username: username,
      password: password,
      mobile: mobile,
    });
    if (loginRes.data) {
      alert("logged in successfuly");
    } else {
      alert("incorrect username/password");
    }
  };

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
            className="flex flex-col w-80 justify-center items-center ml-6 mr-6 mt-10 h-auto bg-P_white shadow-md shadow-shadow_color  "
          >
            <h1 className=" font-bold text-xl mt-2 ">SignUp</h1>
            <input
              type="text"
              placeholder="First Name"
              className=" mt-10 border-b-2 border-light_black text-light_black"
              onChange={(e) => {
                void onFNameChange(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" mt-5 border-b-2 border-light_black text-light_black"
              onChange={(e) => {
                void onLNameChange(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Username"
              className=" mt-5 border-b-2 border-light_black text-light_black"
              onChange={(e) => {
                void onUsernameChange(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className=" mt-5 border-b-2 border-light_black text-light_black"
              onChange={(e) => {
                void onEmailChange(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-b-2 border-light_black mt-5"
              onChange={(e) => {
                void onPasswordChange(e.target.value);
              }}
            />
            {/* <input
              type=""
              placeholder="Mobile"
              className=" border-b-2 border-light_black mt-5"
            /> */}

            <select
              placeholder=""
              className=" cursor-pointer w-auto  border-b-2 border-light_black mt-5 text-light_black  "
              onChange={(e) => {
                void onMobileChange(e.target.value);
              }}
            >
              <option value="disabled selected">Mobile &nbsp; </option>
              <option value="Label2">Iphone</option>
              <option value="Label3">Android</option>
            </select>

            <Link
              to="/"
              className=" flex justify-center mt-10 mb-8 p-1 bg-black rounded-lg w-36 text-P_white"
              onClick={() => {
                void signUp();
              }}
            >
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
