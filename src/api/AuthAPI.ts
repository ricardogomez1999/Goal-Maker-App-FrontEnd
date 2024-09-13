import api from "../lib/axios";
import { isAxiosError } from "axios";
import { UserLoginForm, UserRegistrationForm } from "../Types";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const url = "auth/create-account";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function logIn(formData: UserLoginForm) {
  try {
    const url = "auth/login";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}
