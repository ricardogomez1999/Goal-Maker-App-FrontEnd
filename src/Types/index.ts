import { z } from "zod";

//AUTH USERS
const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;
export type ConfirmToken = Pick<Auth, "token">;
export type RequestConfirmationCodeForm = Pick<Auth, "email">;
// activities

export const activitySchema = z.object({
  _id: z.string(),
  activityName: z.string(),
  calories: z.number(),
  createdAt: z.string(),
});

export const dashBoardActivitySchema = z.array(
  activitySchema.pick({
    _id: true,
    activityName: true,
    calories: true,
    createdAt: true,
  })
);

// food

export const foodSchema = z.object({
  _id: z.string(),
  foodName: z.string(),
  calories: z.number(),
  createdAt: z.string(),
});

export const dashBoardFoodSchema = z.array(
  foodSchema.pick({
    _id: true,
    foodName: true,
    calories: true,
    createdAt: true,
  })
);

// Expenses

export const expenseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  quantity: z.number(),
  category: z.string(),
  createdAt: z.string(),
});

export const categoryChartData = z.array(
  expenseSchema.pick({
    quantity: true,
    category: true,
  })
);

export const dashBoardExpenseSchema = z.array(
  expenseSchema.pick({
    _id: true,
    name: true,
    quantity: true,
    createdAt: true,
  })
);

export const transactionsSchema = z.array(
  expenseSchema.pick({
    _id: true,
    name: true,
    quantity: true,
    category: true,
    createdAt: true,
  })
);

type expense = z.infer<typeof expenseSchema>;
export type transactionsType = Pick<
  expense,
  "category" | "name" | "_id" | "quantity" | "createdAt"
>;
export type expenseFormData = Pick<expense, "category" | "name" | "quantity">;
export type incomeFormData = Pick<expense, "category" | "name" | "quantity">;

export const incomeSchema = z.object({
  _id: z.string(),
  name: z.string(),
  quantity: z.number(),
  category: z.string(),
  createdAt: z.string(),
});

export const dashBoardIncomesSchema = z.array(
  incomeSchema.pick({
    _id: true,
    name: true,
    quantity: true,
    createdAt: true,
    category: true,
  })
);

//Budget
export const budgetSchema = z.object({
  _id: z.string(),
  quantity: z.number(),
  createdAt: z.string(),
});

export const dashBoardBudget = z.array(
  budgetSchema.pick({
    quantity: true,
  })
);
