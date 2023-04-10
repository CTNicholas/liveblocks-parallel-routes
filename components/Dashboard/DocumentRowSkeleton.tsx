import styles from "./DocumentRowSkeleton.module.css";
import clsx from "clsx";
import { Skeleton } from "@/primitives/Skeleton";
import { ComponentProps } from "react";

export function DocumentRowSkeleton({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.row)} {...props}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Skeleton style={{ width: 20, height: 20 }} />
        </div>
        <div className={clsx(styles.info)}>
          <span className={styles.documentName}>Untitled</span>
          <span className={styles.documentDate}>Edited just now</span>
        </div>
      </div>
    </div>
  );
}
