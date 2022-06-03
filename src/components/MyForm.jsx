import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required,
  confirmPassword: yup.string.oneOf([yup.ref("password"), null]),
});

const defaultValues = {
  name: "",
  email: "",
};

export default function MyForm() {
  //destructring the form for validation
  const {
    register,
    handleSubmit,
    reset,
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

  // const { isDirty, isValid, isSubmitting, errors } = formState;

  return (
    <div className="Form">
      <div className="title">Sign Up Form</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            {...register("firstName")}
          />

          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            {...register("lastName")}
          />

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

          <input type="submit" id="submit" />
          <button type="reset" onClick={reset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
