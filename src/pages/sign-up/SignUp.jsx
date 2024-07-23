import React from "react";
import { InputField } from "../../components/input-field/InputField";
import "./style.css";
const SignUp = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-center ">
          <div className="circular-gradient p-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow rounded-lg ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
              <h2 className=" text-3xl font-extrabold text-white">
                Create account
              </h2>
            </div>
            <InputField
              placeholder={"Enter your Name"}
              label={"Name"}
            />
            <InputField
              placeholder={"Enter your Email"}
              label={"Email Address"}
            />
            <InputField
              placeholder={"Enter your password"}
              label={"Password"}
            />
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 mt-5 rounded-full text-white py-3 px-4 border border-transparent  shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
