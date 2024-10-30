import { useForm } from "react-hook-form";
import { userFormData } from "../../Types";
import ProfileForm from "./ProfileForm";
import { useAuth } from "../../hooks/useAuth";
import LoadingCard from "../Dashboard/DashboardComponents/LoadingCard";

export default function Profile() {
  const { data, isLoading } = useAuth();

  const initialValues: userFormData = {
    name: "",
    email: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userFormData>({ defaultValues: initialValues });

  const handleChangeUserInfo = (formData: userFormData) => {};
  return !data ? (
    <LoadingCard />
  ) : (
    <div>
      <div>
        <h1>Account Settings</h1>
        <p>Edit your name, avatar, etc.</p>
      </div>
      <div>
        <form className=" mt-10 space-y-3" noValidate>
          <div className=" flex flex-col gap-3">
            <ProfileForm errors={errors} register={register} data={data} />

            <input
              type="submit"
              className=" bg-nice-red w-full p-3 text-white uppercase font-bold cursor-pointer"
              value="Update data"
              name="action"
              onSubmit={handleSubmit(handleChangeUserInfo)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
