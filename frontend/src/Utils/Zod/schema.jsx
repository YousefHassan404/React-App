import { z } from "zod";

const zSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "pass min 6").max(18, "pass min 18"),
});

export const signInSchema = zSchema;

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters").max(18, "Password must be at most 18 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters").max(18, "Password must be at most 18 characters"),
  imageUrl: z.string().url("Invalid URL").optional(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"], // Correct path to show error under confirmPassword
  message: "Passwords do not match",
});
