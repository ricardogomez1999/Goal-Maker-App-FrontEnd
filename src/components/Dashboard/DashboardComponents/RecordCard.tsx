import { formatDateHour } from "../../../utils/utils";

type RecordCardProps = {
  activity: string;
  time: string;
  calories: number;
};

export default function RecordCard({
  activity,
  time,
  calories,
}: RecordCardProps) {
  return (
    <div className=" flex justify-between w-full p-2 border border-lightGray shadow-md rounded-lg bg-white">
      <p>
        {activity} @ <span className=" font-bold">{formatDateHour(time)}</span>
      </p>
      <p className=" text-nice-red">{calories} cal</p>
    </div>
  );
}
