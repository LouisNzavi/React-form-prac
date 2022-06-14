import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

//form validation using Yup.
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required,
  confirmPassword: yup
    .string()
    .required("password is mandatory")
    .oneOf([yup.ref("password")], "passwords do not match"),
});

const defaultValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  //destructring the form for validation

  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //passing resolver to our hook
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="login-form">
      <div className="title-form">Login</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <p>{errors.firstName?.message}</p>

          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email")}
          />

          <p>{errors.password?.message}</p>
          <input
            type="text"
            name="password"
            placeholder="Password"
            {...register("password")}
          />

          <p>{errors.confirmPassword && "Passwords need to match"}</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />

          {/* <button type="submit" id="submit" /> */}
          <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
}
