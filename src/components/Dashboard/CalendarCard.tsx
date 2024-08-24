import { getDay, getWeekDay } from "../../utils/utils";

export default function CalendarCard() {
  return (
    <div className="p-8 border border-none rounded-lg shadow-md">
      <p className=" text-nice-red font-bold text-lg">{getWeekDay()}</p>
      <p className=" text-nice-black font-bold text-3xl">{getDay()}</p>
      <h1 className=" text-nice-red font-bold text-2xl mt-5">
        Phrase of the day
      </h1>
      <h3 className=" text-nice-black text-2xl font-bold">
        "Today is a great day to be alive"
      </h3>
    </div>
  );
}
