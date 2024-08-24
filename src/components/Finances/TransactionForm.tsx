import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { expenseFormData } from "../../Types";

type TaskFormProps = {
  errors: FieldErrors<expenseFormData>;
  register: UseFormRegister<expenseFormData>;
};

export default function TransactionForm({ errors, register }: TaskFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Expense name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Task name"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "Expense name is mandatory",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="quantity">
          Quantity
        </label>
        <textarea
          id="quantity"
          placeholder="amount"
          className="w-full p-3  border-gray-300 border"
          {...register("quantity", {
            required: "The quantity is mandatory",
          })}
        />
        {errors.quantity && (
          <ErrorMessage>{errors.quantity.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
