"use client";

import { usePathname, useRouter } from "next/navigation";
import { Whiteboard } from "@/components/Whiteboard";
import clsx from "clsx";
import styles from "./WhiteboardPage.module.css";
import { Header } from "@/components/Header/Header";

export default function WhiteboardPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const pathname = usePathname();
  const onDashboard = pathname.endsWith("dashboard");
  const router = useRouter();
  return (
    <>
      <div
        className={clsx(
          styles.whiteboardPage,
          onDashboard && styles.whiteboardPageShrunk
        )}
      >
        <Whiteboard roomId={id} />
        {onDashboard ? (
          <button
            onClick={router.back}
            className={styles.whiteboardPageBackButton}
          />
        ) : null}
      </div>
      <Header />
    </>
  );
}
