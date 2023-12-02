import { z } from "zod";

export interface PostType {
  type: "TEXT" | "IMAGE" | "IMAGES" | "VIDEO";
  description?: string;
}

export const PostValidator = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  bio: z.string().optional(),
  image: z.string().optional(),
});
