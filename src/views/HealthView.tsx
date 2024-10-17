import AddActivityModal from "../components/Health/AddActivityModal";
import AddFoodModal from "../components/Health/AddFoodModal";
import CreateHealthMenu from "../components/Health/HealthComponents/CreateHealthMenu";
import LatestMealsModal from "../components/Health/HealthComponents/LatestMealsModal";
import LatestActivities from "../components/Health/LatestActivities";
import LatestMeals from "../components/Health/LatestMeals";

export default function HealthView() {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-4">
        <div className="grid grid-cols-2 gap-4 h-1/2">
          <div className="flex flex-row space-y-2 ">
            <div className="flex-grow h-full">
              <LatestMeals />
            </div>
          </div>

          <div className="flex flex-row space-y-2">
            <div className="flex-grow h-full">
              <LatestActivities />
            </div>
          </div>
        </div>
        <div className=" flex h-1/2">
          <h1>Hola</h1>
        </div>
      </div>
      <div className=" absolute right-0 bottom-0 z-10 p-4">
        <CreateHealthMenu />
      </div>
      <LatestMealsModal />
      <AddFoodModal />
      <AddActivityModal />
    </>
  );
}
