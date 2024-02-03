import { ZodError } from "zod";

export default function simplifyZodError<Schema extends object>(
  zodError: ZodError<Schema>
) {
  const error = zodError.flatten().fieldErrors;
  for (const field in error) error[field] = error[field].join(", ");
  return error;
}
