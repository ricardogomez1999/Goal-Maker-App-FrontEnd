import {
  dashBoardActivitySchema,
  dashBoardFoodSchema,
  healthFormData,
} from "../Types";
import api from "../lib/axios";
import { isAxiosError } from "axios";
import { formatDate } from "../utils/utils";

export async function getAllActivities() {
  try {
    const { data } = await api("/health/activity");
    const response = dashBoardActivitySchema.safeParse(data);

    if (response) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getTodaysActivities() {
  try {
    const { data } = await api("/health/activity");
    const response = dashBoardActivitySchema.safeParse(data);
    const today = formatDate(new Date().toISOString());

    if (response.success) {
      return response.data.filter(
        (activity) => formatDate(activity.createdAt) === today.toString()
      );
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getAllMeals() {
  try {
    const { data } = await api("/health/food");
    const response = dashBoardFoodSchema.safeParse(data);

    if (response) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getTodaysMeals() {
  try {
    const { data } = await api("/health/food");
    const response = dashBoardFoodSchema.safeParse(data);
    const today = formatDate(new Date().toISOString());

    if (response.success) {
      return response.data.filter(
        (meal) => formatDate(meal.createdAt) === today.toString()
      );
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function createMeal(formData: healthFormData) {
  try {
    const { data } = await api.post("/health/food", formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function createActivity(formData: healthFormData) {
  try {
    const { data } = await api.post("/health/activity", formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
