import { useAppSelector } from "@/context";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme);
  return (
    <div
      className="flex justify-center items-center flex-col min-h-screen"
      data-theme={theme}
    >
      <div className="flex flex-col grow w-full max-w-screen-md mb-20">
        {children}
      </div>
    </div>
  );
}
