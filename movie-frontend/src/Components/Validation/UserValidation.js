import * as yup from "yup";
import { MdEmail } from "react-icons/md";
import Password from "./../../Screens/Dashboard/Password";

//login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required("email is required").trim(),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(20, "password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

//register validation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required("email is required").trim(),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(20, "password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  fullName: yup
    .string()
    .required("Full name is required")
    .max(20, "Full name must be less than 20 characters")
    .matches(/^[a-zA-Z]*$/, "Full name must contain only letters"),
});

export { LoginValidation, RegisterValidation };
