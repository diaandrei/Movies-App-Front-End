import * as Yup from "yup";
import { allTexts } from "./constants";

const {
  validationMessages: {
    emailReq,
    passwordReq,
    invalidEmail,
    passwordMustBe,
    passwordMatch,
    confirmPassword,
    firstNameReq,
    lastNameReq,
  },
} = allTexts;

export const signinSchema = Yup.object({
  email: Yup.string().trim().email(invalidEmail).required(emailReq),
  password: Yup.string()
    .min(8, passwordMustBe)
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[@$!%*?&#.]/,
      "Password must contain at least one special character"
    )
    .required(passwordReq),
});

export const signUpSchema = Yup.object({
  firstName: Yup.string().trim().required(firstNameReq),
  lastName: Yup.string().trim().required(lastNameReq),
  email: Yup.string().trim().email(invalidEmail).required(emailReq),
  password: Yup.string()
    .min(8, passwordMustBe)
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required(passwordReq),
});

export const createMovieSchema = Yup.object({
  title: Yup.string().trim().required("Title is Required"),
});
