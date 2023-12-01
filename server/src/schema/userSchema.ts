import { z } from "zod";

export interface UserType {
  fullName: string;
  email: string;
  password: string;
}

export const UserValidator = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});
