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
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/[0-9]/, "Password must include at least one number.")
    .matches(/[a-z]/, "Password must include at least one lowercase letter.")
    .matches(
      /[@$!%*?&#.]/,
      "Password must include at least one special character."
    )
    .required(passwordReq),
});

export const signUpSchema = Yup.object({
  firstName: Yup.string().trim().required(firstNameReq),
  lastName: Yup.string().trim().required(lastNameReq),
  email: Yup.string().trim().email(invalidEmail).required(emailReq),
  password: Yup.string()
    .min(8, passwordMustBe)
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/[a-z]/, "Password must include at least one lowercase letter.")
    .matches(/[0-9]/, "Password must include at least one number.")
    .matches(
      /[@$!%*?&#]/,
      "Password must include at least one special character."
    )
    .required(passwordReq),
});

export const createMovieSchema = Yup.object({
  title: Yup.string().trim().required("Please provide a title."),
});

export const updateMovieSchema = Yup.object({
  plot: Yup.string().required("Please provide a plot for the title."),
  omdbRating: Yup.number()
    .typeError("IMDb rating must be a number between 1 and 100.")
    .required("Please enter the IMDb rating.")
    .min(1, "IMDb rating must be a number between 1 and 100.")
    .max(100, "IMDb rating must be a number between 1 and 100."),
  actors: Yup.array()
    .of(
      Yup.string()
        .required("Please enter the name of the actor.")
        .matches(
          /^[\p{L}\p{P}\s]+$/u,
          "Actor names should only contain letters."
        )
    )
    .min(1, "Please include at least one actor in the cast."),
});
