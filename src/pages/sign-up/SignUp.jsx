import React from "react";
import { GenericButton, InputField } from "../../components";
import "./style.css";
import { Formik, Form } from "formik";
import { signUpSchema } from "../../common/schemas";
import {
  usePostApiAccountLoginMutation,
  usePostApiAccountRegisterMutation,
} from "../../redux/slice/movies.ts";
import { path } from "../../common/routesNames.js";
import { setIsAdmin, setToken, setUserName } from "../../utils/LocalStorage.js";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signUpApi, { isLoading }] = usePostApiAccountRegisterMutation();
  const [accountLoginApi] = usePostApiAccountLoginMutation();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const performSignUp = async (values) => {
    let payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values?.email,
      password: values?.password,
    };
    let result = await signUpApi({
      moviesContractsRequestsRegisterRequest: payload,
    });

    const { success, title } = result?.data || {};
    if (result && success) {
      let response = await accountLoginApi({
        moviesContractsRequestsLoginRequest: payload,
      });
      const { success, content, title } = response?.data || {};
      if (response && success) {
        const { token, isAdmin, name } = content;
        setUserName(name);
        setIsAdmin(isAdmin);
        setToken(token);
        window.location.replace(path.home);
      } else {
        toast.error(title);
      }
    } else {
      toast.error(title);
    }
  };
  const handleKeyPress = (event, submitForm) => {
    if (event.which === 13) {
      submitForm();
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      onSubmit={(values, formikActions) => {
        performSignUp(values);
      }}
      validationSchema={signUpSchema}
      enableReinitialize
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        submitForm,
      }) => (
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
                  id={"firstName"}
                  name={"firstName"}
                  label={"First Name"}
                  placeholder={"Enter your last name"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={touched.firstName && errors.firstName}
                />
                <InputField
                  id={"lastName"}
                  name={"lastName"}
                  label={"Last Name"}
                  placeholder={"Enter your last name"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={touched.lastName && errors.lastName}
                />
                <InputField
                  name={"email"}
                  id={"email"}
                  placeholder={"Enter your Email"}
                  label={"Email Address"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={touched.email && errors.email}
                />
                <InputField
                  id={"password"}
                  name={"password"}
                  placeholder={"Enter your password"}
                  label={"Password"}
                  error={touched.password && errors.password}
                  isPassword
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <div>
                  <GenericButton
                    onPress={handleSubmit}
                    isLoading={isLoading}
                    title={"Sign Up"}
                  />
                  <p className="mt-4 cursor-pointer hover:text-blue-800  hover:underline text-sm text-blue-900 text-center">
                    <a
                      href="/sign-in"
                      className="text-blue-400 hover:text-blue-300 hover:underline font-semibold"
                    >
                      Already have an account ?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
