import React from "react";
import { Formik, Form } from "formik";
import { signinSchema } from "../../common/schemas.js";
import { usePostApiAccountLoginMutation } from "../../redux/slice/movies.ts";
import { setIsAdmin, setToken, setUserName } from "../../utils/LocalStorage.js";
import { InputField } from "../input-field/InputField.jsx";
import { GenericButton } from "../generic-button/GenericButton.jsx";
import { path } from "../../common/routesNames.js";
import { toast } from "react-toastify";

export const SignInForm = ({}) => {
  const [accountLoginApi, { isLoading }] = usePostApiAccountLoginMutation();
  const initialValues = {
    email: "",
    password: "",
  };

  const requestLogin = async (values) => {
    try {
      let payload = {
        email: values.email,
        password: values.password,
      };
      let result = await accountLoginApi({
        moviesContractsRequestsLoginRequest: payload,
      });
      const { success, content, title } = result?.data || {};
      if (result && success) {
        const { token, isAdmin, name } = content;
        console.log("content", content);
        window.location.replace(path.home);
        setUserName(name);
        setToken(token);
        setIsAdmin(isAdmin);
      } else {
        toast.error(title);
      }
    } catch (error) {
      toast.error(error?.message);
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
        requestLogin(values);
      }}
      validationSchema={signinSchema}
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
        <>
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
              title={"Sign In"}
              onPress={handleSubmit}
              isLoading={isLoading}
            />
            <p className="text-white text-center my-2">Or</p>
            <p className="mt-1 cursor-pointer hover:text-blue-800  hover:underline text-sm text-blue-900 text-center">
              <a href="/sign-up">Sign Up</a>
            </p>
          </div>
        </>
      )}
    </Formik>
  );
};
