import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage";
import { healthFormData } from "../../../Types";

type HealthFormProps = {
  errors: FieldErrors<healthFormData>;
  register: UseFormRegister<healthFormData>;
  type: string;
};

export default function HealthForm({
  errors,
  register,
  type,
}: HealthFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          <span className=" capitalize">{type}</span> name
        </label>
        <input
          id="name"
          type="text"
          placeholder={`${type} name`}
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: `${type} name is mandatory`,
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="calories">
          Calories
        </label>
        <input
          id="calories"
          placeholder="calories"
          className="w-full p-3  border-gray-300 border"
          {...register("calories", {
            required: "The calories are mandatory",
            validate: (value) =>
              value > 0 || "The calories must be greater than 0",
          })}
        />
        {errors.calories && (
          <ErrorMessage>{errors.calories.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
