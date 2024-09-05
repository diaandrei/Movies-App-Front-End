import React from "react";
import { SignInForm } from "../../components";

const SignIn = () => {
  return (
    <div className="bg-black min-h-screen  w-full">
      <div className="max-w-7xl mx-auto p-5 h-[90vh]">
        <div className="flex items-center justify-center h-full ">
          <div className="circular-gradient p-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow rounded-lg ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
              <h2 className=" text-3xl font-extrabold text-white">
                Sign In to Watch Your Favourites!
              </h2>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
