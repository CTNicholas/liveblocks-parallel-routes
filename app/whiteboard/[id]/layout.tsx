import { ReactNode } from "react";

export default function Layout({
  children,
  dashboard,
}: {
  children: ReactNode;
  dashboard: ReactNode;
}) {
  return (
    <>
      {dashboard}
      {children}
    </>
  );
}
