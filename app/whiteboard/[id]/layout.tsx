import { ReactNode } from "react";

export const metadata = {
  title: "Whiteboard",
};

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
