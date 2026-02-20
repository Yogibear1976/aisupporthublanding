import { toast } from "sonner";
import { z } from "zod";

export function getErrorMessage(err: unknown) {
  const unknownError = "Something went wrong, please try again later.";

  if (err instanceof Error && (err as any).digest === "NEXT_REDIRECT") {
    throw err;
  }

  if (err instanceof z.ZodError) {
    return err.issues.map((issue) => issue.message).join("\n");
  }

  if (err instanceof Error) {
    return err.message;
  }

  return unknownError;
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err);
  return toast.error(errorMessage);
}
