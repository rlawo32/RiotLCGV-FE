import Image from "next/image";
import styles from "./page.module.css";

import ListMatch from "./component/match_list";
import ListHistory from "./component/match_history";

export default function Home() {
  return (
    <div>
      <ListHistory />
    </div>
  );
}
