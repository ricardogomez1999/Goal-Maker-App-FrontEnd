import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { ForgotPasswordForm } from "../../Types";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
  const initialValues: ForgotPasswordForm = {
    email: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: forgotPassword,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  const handleForgotPassword = (formData: ForgotPasswordForm) =>
    mutate(formData);

  return (
    <>
      <h1 className="text-3xl text-nice-black">Forgot your password?</h1>
      <p className="text-2xl font-light text-nice-black mt-5">
        Fill out the form to receive {""}
        <span className=" text-nice-red font-bold"> further instructions</span>
      </p>
      <form
        onSubmit={handleSubmit(handleForgotPassword)}
        className="space-y-8 p-10  bg-white"
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
              required: "The registered email is mandatory",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <input
          type="submit"
          value="Send instructions"
          className="bg-nice-red w-full p-3  text-white text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to={"/auth/register"}
          className=" text-center text-gray-500 font-normal"
        >
          Don't have an account? Create one here{" "}
        </Link>
        <Link
          to={"/auth/login"}
          className=" text-center text-gray-500 font-normal"
        >
          Do you have an account? Log in here{" "}
        </Link>
      </nav>
    </>
  );
}
