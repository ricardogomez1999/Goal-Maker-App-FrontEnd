import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { expenseFormData } from "../../Types";
import TransactionForm from "./TransactionForm";

export default function AddExpenseModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTaks = queryParams.get("newExpense");
  const show = modalTaks ? true : false;

  const initialValues: expenseFormData = {
    name: "",
    category: "other",
    quantity: 0,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialValues });

  const handleCreateExpense = () => {};
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            navigate(location.pathname, { replace: true });
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title as="h3" className="font-black text-4xl  my-5">
                    Add Expense
                  </Dialog.Title>

                  <p className="text-xl font-bold">
                    Fill out the form to {""}
                    <span className="text-nice-red">add expense</span>
                  </p>
                  <form
                    className=" mt-10 space-y-3"
                    noValidate
                    onSubmit={handleSubmit(handleCreateExpense)}
                  >
                    <TransactionForm register={register} errors={errors} />
                    <input
                      type="submit"
                      className=" bg-nice-red w-full hover:bg-nice-red/[30] p-3 text-white uppercase font-bold cursor-pointer transtico"
                      value="Add task"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
