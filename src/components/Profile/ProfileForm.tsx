import { FieldErrors, UseFormRegister } from "react-hook-form";
import { userFormData } from "../../Types";
import ErrorMessage from "../ErrorMessage";

type ProfileFormProps = {
  errors: FieldErrors<userFormData>;
  register: UseFormRegister<userFormData>;
  data: userFormData;
};

export default function ProfileForm({
  errors,
  register,
  data,
}: ProfileFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl capitalize" htmlFor="quantity">
          Your name
        </label>
        <input
          id="name"
          type="text"
          placeholder={data.name}
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "This field is requiered",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl capitalize" htmlFor="quantity">
          Email Address
        </label>
        <input
          id="name"
          type="email"
          placeholder={data.email}
          className="w-full p-3  border-gray-300 border"
          {...register("email", {
            required: "This field is requiered",
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
    </>
  );
}
