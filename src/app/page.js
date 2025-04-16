import styles from "./page.module.css";
import App from "@/app/components/app";

export default function Home() {
  return (
    <div className={styles.page}>
      <App />
    </div>
  );
}
