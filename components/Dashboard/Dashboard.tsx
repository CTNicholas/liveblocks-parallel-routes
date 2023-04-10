import { DocumentRowSkeleton } from "@/components/Dashboard/DocumentRowSkeleton";
import styles from "./Dashboard.module.css";

export function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboardList}>
        <header className={styles.dashboardHeader}>Documents</header>
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
        <DocumentRowSkeleton />
      </div>
    </main>
  );
}
