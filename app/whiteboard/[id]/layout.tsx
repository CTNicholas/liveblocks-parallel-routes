import { ReactNode } from "react";

export default function Layout({
  children,
  dashPreview,
}: {
  children: ReactNode;
  dashPreview: ReactNode;
}) {
  return (
    <>
      {dashPreview}
      {children}
    </>
  );
}
