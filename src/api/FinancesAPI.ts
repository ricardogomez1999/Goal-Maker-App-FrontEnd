import {
  categoryChartData,
  dashBoardBudget,
  dashBoardExpenseSchema,
  dashBoardIncomesSchema,
  transactionsSchema,
} from "../Types";
import api from "../lib/axios";
import { isAxiosError } from "axios";
import { formatDate } from "../utils/utils";

export async function getTodaysExpenses() {
  try {
    const { data } = await api("/financials/expense");
    const response = dashBoardExpenseSchema.safeParse(data);
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

export async function getTodaysIncomes() {
  try {
    const { data } = await api("/financials/income");
    const response = dashBoardIncomesSchema.safeParse(data);
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

export async function getThisMonthsExpenses() {
  try {
    const { data } = await api("/financials/expense/current-month");
    const response = dashBoardExpenseSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getThisMonthsIncomes() {
  try {
    const { data } = await api("/financials/income/current-month");
    const response = dashBoardIncomesSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const getExpensesByDateRange = async (
  startDate: string,
  endDate: string
) => {
  try {
    const { data } = await api("/financials/expense/by-date-range", {
      params: {
        startDate,
        endDate,
      },
    });
    const response = dashBoardIncomesSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getIncomesByDateRange = async (
  startDate: string,
  endDate: string
) => {
  try {
    const { data } = await api("/financials/income/by-date-range", {
      params: {
        startDate,
        endDate,
      },
    });
    const response = dashBoardExpenseSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getBudget = async () => {
  try {
    const { data } = await api("/financials/budget");
    const response = dashBoardBudget.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getExpensesByCategory = async (
  startDate: string,
  endDate: string
) => {
  try {
    const { data } = await api("/financials/expenses-by-category", {
      params: {
        startDate,
        endDate,
      },
    });
    const response = categoryChartData.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getLatestTransactions = async () => {
  try {
    const { data } = await api("/financials/transactions");
    const response = transactionsSchema.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getIncomesByCategory = async (
  startDate: string,
  endDate: string
) => {
  try {
    const { data } = await api("/financials/incomes-by-category", {
      params: {
        startDate,
        endDate,
      },
    });
    const response = categoryChartData.safeParse(data);

    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};
