import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Header } from "@/components/Header/Header";

export const metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <>
      <Dashboard />
      <Header />
    </>
  );
}
