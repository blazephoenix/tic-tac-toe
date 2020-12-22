import "./assets/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameStart from "./components/GameStart";
import PickSide from "./components/PickSide";
import GamePlay from "./components/GamePlay";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/pick-side" component={PickSide} />
        <Route exact path="/play" component={GamePlay} />
        <Route exact path="/" component={GameStart} />
      </Switch>
    </Router>
  );
}

export default App;
