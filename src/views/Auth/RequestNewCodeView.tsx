import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { RequestConfirmationCodeForm } from "../../Types";
import { useMutation } from "@tanstack/react-query";
import { requestNewCode } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function RequestNewCodeView() {
  const initialValues: RequestConfirmationCodeForm = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: requestNewCode,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
    },
  });

  const handleRequestCode = (formData: RequestConfirmationCodeForm) => {
    mutate(formData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-nice-black">
        Request new confirmation code
      </h1>
      <p className="text-xl font-light text-nice-black mt-5">
        Enter a valid email address{""}
        <span className=" text-nice-red font-bold"> to get your new code</span>
      </p>

      <form
        onSubmit={handleSubmit(handleRequestCode)}
        className="space-y-8 p-10 rounded-lg bg-white mt-10"
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
            className="w-full p-3 rounded-lg border-gray-300 border"
            {...register("email", {
              required: "Registered email",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Not valid email",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <input
          type="submit"
          value="Send code"
          className="bg-nice-red w-full p-3 rounded-lg text-white font-bold  text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <nav className=" mt-10 flex flex-col space-y-4">
          <Link
            to={"/auth/login"}
            className=" text-center text-gray-500 font-normal"
          >
            Do you have an account? Log in here{" "}
          </Link>
        </nav>
        <Link
          to="/auth/forgot-password"
          className="text-center text-gray-500 font-normal"
        >
          ¿Do you forget your password? Reset
        </Link>
      </nav>
    </>
  );
}
