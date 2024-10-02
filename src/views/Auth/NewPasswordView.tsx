import { useState } from "react";
import NewPasswordToken from "../../components/Auth/NewPasswordToken";
import NewPasswordForm from "../../components/Auth/NewPasswordForm";
import { ConfirmToken } from "../../Types";

export default function NewPasswordView() {
  const [isValidToken, setIsValidToken] = useState(false);
  const [token, setToken] = useState<ConfirmToken["token"]>("");
  return (
    <>
      <h1 className=" text-4xl font-bold text-nice-black">
        {" "}
        Reset your password
      </h1>
      <p className=" text-2xl font-light text-nice-black mt-5">
        {" "}
        Enter the code you receive
        <span className=" text-nice-red"> via email</span>
      </p>
      {!isValidToken ? (
        <NewPasswordToken
          setIsValidToken={setIsValidToken}
          token={token}
          setToken={setToken}
        />
      ) : (
        <NewPasswordForm token={token} />
      )}
    </>
  );
}
