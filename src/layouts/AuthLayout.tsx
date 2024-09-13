import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <>
      <div className=" bg-gray-100 min-h-screen">
        <div className=" py-10 lg:py-20 mx-auto w-[450px]  flex flex-col items-center">
          <div className=" flex w-1/2">
            <Logo logoType={2} />
          </div>

          <div className=" mt-10 w-full">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
}
