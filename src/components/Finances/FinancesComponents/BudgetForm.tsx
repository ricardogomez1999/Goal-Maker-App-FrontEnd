import ErrorMessage from "../../ErrorMessage";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { budgetFormData } from "../../../Types";

type BudgetFormProps = {
  errors: FieldErrors<budgetFormData>;
  register: UseFormRegister<budgetFormData>;
};

export default function BudgetForm({ errors, register }: BudgetFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl capitalize" htmlFor="quantity">
          new budget
        </label>
        <input
          id="budget"
          type="number"
          placeholder={"Set a new budget"}
          className="w-full p-3  border-gray-300 border"
          {...register("quantity", {
            required: "A budget is mandatory",
          })}
        />
        {errors.quantity && (
          <ErrorMessage>{errors.quantity.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
