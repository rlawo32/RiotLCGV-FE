import MainView from "./views/main_view";
import MoveGithub from "./component/move_github";

export default function Home() {
  return (
    <div>
      <MoveGithub />
      <MainView />
    </div>
  );
}
