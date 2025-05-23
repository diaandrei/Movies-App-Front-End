import React from "react";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SignInForm } from "../sign-in-form/SignInForm";

export const RegisterModal = ({ modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      backgroundColor: "transparent",
      border: "0px",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex items-center justify-center ">
        <div className="circular-gradient p-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md drop-shadow rounded-lg ">
          <button onClick={closeModal} className=" absolute  right-3 top-3">
            <IoIosCloseCircleOutline color="white" size={30} />
          </button>
          <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
            <h2 className=" text-3xl font-extrabold text-white">
              Access Your Account
            </h2>
            <p className="mt-1  text-sm text-white">Sign in to continue.</p>
          </div>
          <SignInForm />
        </div>
      </div>
    </Modal>
  );
};
