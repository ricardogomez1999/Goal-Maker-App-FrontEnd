import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { expenseFormData, incomeFormData } from "../../Types";
import TransactionForm from "./FinancesComponents/TransactionForm";
import { createIncome } from "../../api/FinancesAPI";
import { toast } from "react-toastify";

export default function AddIncomeModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalIncome = queryParams.get("newIncome");
  const show = modalIncome ? true : false;

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
  } = useForm<expenseFormData>({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createIncome,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleCreateIncome = (formData: incomeFormData, action: string) => {
    if (action === "add income") {
      mutate(formData, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["incomeByDateRange"] });
          queryClient.invalidateQueries({ queryKey: ["latestTransactions"] });
          queryClient.invalidateQueries({ queryKey: ["incomesByCategory"] });
          reset(), toast.success("Income added, you can add another one");
          navigate(location.pathname, { replace: true });
        },
      });
    } else if (action === "add other income") {
      mutate(formData, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["incomeByDateRange"] });
          queryClient.invalidateQueries({ queryKey: ["latestTransactions"] });
          queryClient.invalidateQueries({ queryKey: ["incomesByCategory"] });
          reset(), toast.success("Income added, you can add another one");
        },
      });
    }
  };
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 w-1/2"
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
                <Dialog.Panel className="w-1/2 max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-4xl text-center  my-5"
                  >
                    Add Income
                  </Dialog.Title>

                  <p className="text-xl text-center">
                    Fill out the form to {""}
                    <span className="text-nice-green">add an income</span>
                  </p>
                  <form
                    className=" mt-10 space-y-3"
                    noValidate
                    onSubmit={(e) => {
                      const action = (e.nativeEvent as any).submitter.value;
                      handleSubmit((data) => handleCreateIncome(data, action))(
                        e
                      );
                    }}
                  >
                    <TransactionForm
                      register={register}
                      errors={errors}
                      type={"income"}
                    />
                    <div className=" flex gap-3">
                      <input
                        type="submit"
                        className=" bg-nice-green w-full p-3 text-white uppercase font-bold cursor-pointer"
                        value="add income"
                        name="action"
                      />
                      <input
                        type="submit"
                        className=" bg-white w-full text-nice-black p-3 uppercase font-bold cursor-pointer border-nice-black border"
                        value="add other income"
                        name="action"
                      />
                    </div>
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
