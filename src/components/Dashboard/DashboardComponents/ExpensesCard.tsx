import { formatDateHour } from "../../../utils/utils";

type ExpensesCardProps = {
  name: string;
  time: string;
  quantity: number;
};

export default function ExpensesCard({
  name,
  time,
  quantity,
}: ExpensesCardProps) {
  return (
    <div className=" flex justify-between w-full p-2 border border-lightGray shadow-md rounded-lg bg-white">
      <p>
        {name} @ <span className=" font-bold">{formatDateHour(time)}</span>
      </p>
      <p className=" text-nice-red">${quantity}</p>
    </div>
  );
}
