import { DocumentRow } from "@/components/Dashboard/DocumentRow";
import styles from "./Dashboard.module.css";

const ids = [...Array(30).keys()];

export function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboardList}>
        <header className={styles.dashboardHeader}>Documents</header>
        {ids.map((id) => (
          <DocumentRow id={id} />
        ))}
      </div>
    </main>
  );
}
