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
    .required("Please enter the IMDb rating.")
    .min(1, "The rating should be at least 1.")
    .max(100, "The rating should not exceed 100."),
  actors: Yup.array()
    .of(Yup.string().required("Please enter the name of the actor."))
    .min(1, "Please include at least one actor in the cast."),
});


