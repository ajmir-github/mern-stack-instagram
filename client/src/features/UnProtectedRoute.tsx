import { ReactNode } from "react";

export default function UnProtectedRoute({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
