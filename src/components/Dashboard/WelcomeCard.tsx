import { useAuth } from "../../hooks/useAuth";
import LoadingCard from "./DashboardComponents/LoadingCard";

export default function WelcomeCard() {
  const { data, isLoading } = useAuth();
  return isLoading ? (
    <LoadingCard />
  ) : (
    <div className="w-full h-full bg-welcome bg-no-repeat bg-right bg-[length:327px_327px] col-span-2 border border-none rounded-lg shadow-md">
      <div className=" w-1/2 py-8 pl-8">
        <h1 className=" text-3xl mb-4">
          Welcome Back,{" "}
          <span className=" font-bold">{data?.name.split(" ")[0]}</span>
        </h1>
        <p className=" text-xl font-light">
          You have registered your habits 13 days in a row. Your progress is{" "}
          <span className=" text-nice-pink">very good!</span>
        </p>
      </div>
    </div>
  );
}
