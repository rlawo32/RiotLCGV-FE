import Image from "next/image";
import styles from "./page.module.css";

import ListMatch from "./component/match_list";
import ListHistory from "./component/match_history";
import ChartTest  from "./component/chart_test";


export default function Home() {
  return (
    <div>
      <ChartTest />
    </div>
  );
}
