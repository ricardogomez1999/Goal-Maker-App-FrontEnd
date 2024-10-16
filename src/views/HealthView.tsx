import LatestMeals from "../components/Health/LatestMeals";

export default function HealthView() {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-row space-y-2 ">
            <div className="flex-grow h-1/2">
              <LatestMeals />
            </div>
          </div>

          <div className="flex flex-row space-y-2">
            <div className="flex-grow h-1/2 bg-white shadow p-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
