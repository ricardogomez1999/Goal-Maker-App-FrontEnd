import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { UserRegistrationForm } from "../../Types";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {
  const initialValues: UserRegistrationForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const password = watch("password");

  const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  const handleRegister = (formData: UserRegistrationForm) => mutate(formData);

  return (
    <>
      <h1 className="text-3xl text-nice-black">Create your account</h1>
      <p className="text-2xl font-light text-nice-black mt-5">
        Fill out the form {""}
        <span className=" text-nice-red font-bold">
          {" "}
          to create your account
        </span>
      </p>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-8 p-10  bg-white mt-10"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Registered email"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "The email is mandatory",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Not valid email",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Name</label>
          <input
            type="name"
            placeholder="Registered name"
            className="w-full p-3  border-gray-300 border"
            {...register("name", {
              required: "The name is mandatory",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Registered password"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "The password is mandatory",
              minLength: {
                value: 8,
                message: "The password must contain at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Repeat password</label>

          <input
            id="password_confirmation"
            type="password"
            placeholder="Repeat registered password"
            className="w-full p-3  border-gray-300 border"
            {...register("password_confirmation", {
              required: "Repeat the password is mandatory",
              validate: (value) =>
                value === password || "The passwords are not the same",
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Register"
          className="bg-nice-red w-full p-3  text-white  text-xl cursor-pointer"
        />
      </form>
      <nav className=" mt-10 flex flex-col space-y-4">
        <Link
          to={"/auth/login"}
          className=" text-center text-gray-500 font-normal"
        >
          Do you have an account? Log in here{" "}
        </Link>
        <Link
          to={"/auth/forgot-password"}
          className=" text-center text-gray-500 font-normal"
        >
          Forgot your password? Reset{" "}
        </Link>
      </nav>
    </>
  );
}
