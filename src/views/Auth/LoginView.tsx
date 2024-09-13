import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { UserLoginForm } from "../../Types";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function LoginView() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: logIn,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
    },
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Registered email"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "Email is mandatory",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Not valid email",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Registered passoword"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "The password is mandatory",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Log in"
          className="bg-nice-red w-full p-3  text-white text-xl cursor-pointer"
        />
      </form>
      <nav className=" mt-10 flex flex-col space-y-4">
        <Link
          to={"/auth/register"}
          className=" text-center text-gray-500 font-normal"
        >
          Don't have an account? Create one here{" "}
        </Link>
      </nav>
    </>
  );
}
