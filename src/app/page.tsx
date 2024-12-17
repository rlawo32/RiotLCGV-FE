import Image from "next/image";
import styles from "./page.module.css";

import ListMatch from "./component/match_list";

export default function Home() {
  return (
    <div className={styles.page}>
      <ListMatch />
    </div>
  );
}
