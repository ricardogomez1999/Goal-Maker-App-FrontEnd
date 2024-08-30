import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage";
import { expenseFormData } from "../../../Types";
import { expenseCategories, incomesCategories } from "../../../utils/utils";
import { useState } from "react";

type TransactionFormProps = {
  errors: FieldErrors<expenseFormData>;
  register: UseFormRegister<expenseFormData>;
  type: string;
};

export default function TransactionForm({
  errors,
  register,
  type,
}: TransactionFormProps) {
  const [selectedCategory, setSelectedCategory] = useState("others");

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
        <label className="font-normal text-2xl" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="w-full p-3  border-gray-300 border"
          {...register("category", {
            required: "The category is mandatory",
          })}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {type === "income"
            ? Object.entries(incomesCategories).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))
            : Object.entries(expenseCategories).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
        </select>
        {errors.category && (
          <ErrorMessage>{errors.category.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="quantity">
          Quantity
        </label>
        <input
          id="quantity"
          placeholder="amount"
          className="w-full p-3  border-gray-300 border"
          {...register("quantity", {
            required: "The quantity is mandatory",
            validate: (value) =>
              value > 0 || "The quantity must be greater than 0",
          })}
        />
        {errors.quantity && (
          <ErrorMessage>{errors.quantity.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
