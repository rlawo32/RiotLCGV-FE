import { Suspense } from 'react';

import MainView from "./views/main_view";
import MoveGithub from "./component/move_github";
import LoadingSpinner from "./component/loading_spinner";

export default function Home() {
  return (
    <div>
      <MoveGithub />
      <Suspense fallback={<LoadingSpinner />}>
        <MainView />
      </Suspense>
    </div>
  );
}
