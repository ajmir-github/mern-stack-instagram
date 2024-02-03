import { z } from "zod";

export default function createZodError(path: string, message: string) {
  const zError = new z.ZodError([]);
  zError.addIssue({
    code: "custom",
    fatal: true,
    path: [path],
    message: message,
  });

  return zError;
}
