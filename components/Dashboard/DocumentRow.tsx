import styles from "./DocumentRow.module.css";
import clsx from "clsx";
import { DocumentIcon } from "@/components/Dashboard/DocumentIcon";
import Link from "next/link";

export function DocumentRow({ id }: { id: number | string }) {
  return (
    <Link href={`/whiteboard/${id}`} className={styles.row}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <DocumentIcon />
        </div>
        <div className={clsx(styles.info)}>
          <span className={styles.documentName}>Untitled</span>
          <span className={styles.documentDate}>Edited just now</span>
        </div>
      </div>
    </Link>
  );
}
