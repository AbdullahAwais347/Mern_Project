import { Link } from "react-router-dom";
import React, { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onUsernameChange = (username) => {
    setUsername(username);
  };

  const onPasswordChange = (password) => {
    setPassword(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
    // console.log("Hello");
  };
  const login = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/login", {
      username: username,
      password: password,
    });
    if (loginRes.data) {
      navigate("/Dashboard");
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
            onSubmit={handleSubmit}
            className="flex flex-col w-80 justify-center items-center ml-6 mr-6 mt-20 h-auto bg-P_white shadow-md shadow-shadow_color "
          >
            {errorMessage && (
              <div style={{ color: "red" }} className="mt-6 mr-6 ml-6">
                {errorMessage}
              </div>
            )}
            <h1 className=" font-bold text-xl mt-12 ">Login</h1>

            <input
              type="text"
              placeholder="Username"
              value={username}
              className=" mt-10 border-b-2 border-light_black text-light_black"
              onChange={(e) => {
                void onUsernameChange(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-b-2 border-light_black mt-5"
              value={password}
              onChange={(e) => {
                void onPasswordChange(e.target.value);
              }}
            />

            <div className=" cursor-pointer mt-6 flex text-xs text-light_black">
              <p className=" cursor-pointer mr-12">
                <Link to="/forgetPassword">Forget Password?</Link>
              </p>
              <p>
                <Link to="/signUp">Sign Up</Link>
              </p>
            </div>

            <Link
              to="/Dashboard"
              type="submit"
              className=" flex justify-center mt-10 mb-10 p-1 bg-black rounded-lg w-36 text-P_white"
              onClick={() => {
                void login();
              }}
            >
              Log in
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
