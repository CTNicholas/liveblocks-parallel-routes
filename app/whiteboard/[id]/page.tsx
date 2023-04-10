"use client";

import { usePathname, useRouter } from "next/navigation";
import { Whiteboard } from "@/components/Whiteboard";
import { RoomProvider } from "@/liveblocks.config";
import { LiveMap } from "@liveblocks/client";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import clsx from "clsx";
import styles from "./WhiteboardPage.module.css";
import { randomUser } from "@/utils/randomUser";
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
    <TooltipProvider>
      <RoomProvider
        id={id}
        initialPresence={{ cursor: null, info: randomUser() }}
        initialStorage={{ notes: new LiveMap() }}
      >
        <div
          className={clsx(
            styles.whiteboardPage,
            onDashboard && styles.whiteboardPageShrunk
          )}
        >
          <Whiteboard />
          {onDashboard ? (
            <button
              onClick={router.back}
              className={styles.whiteboardPageBackButton}
            />
          ) : null}
        </div>
        <Header />
      </RoomProvider>
    </TooltipProvider>
  );
}
