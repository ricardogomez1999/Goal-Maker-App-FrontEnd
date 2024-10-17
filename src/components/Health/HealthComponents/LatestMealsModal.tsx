import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TableRowType } from "../../../Types";
import TableRow from "./TableRow";
import { getAllMeals } from "../../../api/HealthAPI";

export default function LatestMealsModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTransaction = queryParams.get("mealsComplete");
  const show = modalTransaction ? true : false;

  const { data, isLoading } = useQuery({
    queryKey: ["allRegisteredMeals"],
    queryFn: () => getAllMeals(),
  });

  const exportToCSV = (foods: TableRowType[]) => {
    const headers = ["Name", "Date", "Amount"];
    const rows = foods.map((food) => [
      food.name,
      new Date(food.createdAt).toLocaleDateString(),
      food.calories,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
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
                    className="font-bold text-4xl text-center my-5 flex justify-between"
                  >
                    <p>
                      All registered{""}
                      <span className="text-nice-red">meals</span>
                    </p>

                    <button
                      className=" text-sm font-normal p-1 px-3  rounded-xl bg-slate-400 text-white"
                      onClick={() => exportToCSV(data!)}
                    >
                      export to .cvs
                    </button>
                  </Dialog.Title>
                  {isLoading && <p>Loading...</p>}

                  {data && (
                    <div className="mt-2 overflow-x-hidden h-96">
                      <table className="min-w-full divide-y divide-gray-200 h-fit">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                              Name
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data?.map((food) => (
                            <TableRow key={food._id} row={food} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
