import Image from "next/image";
import styles from "./page.module.css";

import ListMatch from "./list/list_match";

export default function Home() {
  return (
    <div className={styles.page}>
      <ListMatch />
    </div>
  );
}
