import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { NewPasswordForm } from "../../Types";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../api/AuthAPI";
import { toast } from "react-toastify";

type NewPasswordFormProps = {
  token: string;
};

export default function NewPasswordForm({ token }: NewPasswordFormProps) {
  const navigate = useNavigate();
  const initialValues: NewPasswordForm = {
    password: "",
    password_confirmation: "",
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/auth/login");
      reset();
    },
  });

  const handleNewPassword = (formData: NewPasswordForm) => {
    const data = {
      formData,
      token,
    };

    mutate(data);
  };

  const password = watch("password");

  return (
    <>
      <form
        onSubmit={handleSubmit(handleNewPassword)}
        className="space-y-8 p-10  bg-white mt-10"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Registered password"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "The new password is mandatory",
              minLength: {
                value: 8,
                message: "The password must be 8 characters or more",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Repeat Password</label>

          <input
            id="password_confirmation"
            type="password"
            placeholder="Repeat password"
            className="w-full p-3  border-gray-300 border"
            {...register("password_confirmation", {
              required: "Repeat password is mandatory",
              validate: (value) =>
                value === password || "The password do not match",
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Reset password"
          className="bg-nice-red  w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </>
  );
}
