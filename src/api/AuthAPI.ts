import api from "../lib/axios";
import { isAxiosError } from "axios";
import {
  ConfirmToken,
  ForgotPasswordForm,
  NewPasswordForm,
  RequestConfirmationCodeForm,
  User,
  UserLoginForm,
  UserRegistrationForm,
  userSchema,
} from "../Types";

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
    localStorage.setItem("AUTH_TOKEN", data);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function confirmAccount(formData: ConfirmToken) {
  try {
    const url = "auth/confirm-account";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function requestNewCode(formData: RequestConfirmationCodeForm) {
  try {
    const url = "auth/request-code";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function forgotPassword(formData: ForgotPasswordForm) {
  try {
    const url = "auth/forgot-password";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function forgotPasswordToken(formData: ForgotPasswordForm) {
  try {
    const url = "auth/forgot-password";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function validToken(formData: ConfirmToken) {
  try {
    const url = "auth/valid-token";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function resetPassword({
  formData,
  token,
}: {
  formData: NewPasswordForm;
  token: ConfirmToken["token"];
}) {
  try {
    const url = `auth/reset-password/${token}`;
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}

export async function getUser() {
  try {
    const { data } = await api<User>("auth/user");
    const response = userSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.error);
    }
  }
}
