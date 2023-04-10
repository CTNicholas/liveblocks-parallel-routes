import styles from "./DocumentRow.module.css";
import clsx from "clsx";
import { ComponentProps } from "react";
import { DocumentIcon } from "@/components/Dashboard/DocumentIcon";

export function DocumentRow({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.row)} {...props}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <DocumentIcon />
        </div>
        <div className={clsx(styles.info)}>
          <span className={styles.documentName}>Untitled</span>
          <span className={styles.documentDate}>Edited just now</span>
        </div>
      </div>
    </div>
  );
}
