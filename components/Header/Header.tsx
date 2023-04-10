import { Logo } from "@/components/Logo";
import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/dashboard">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
