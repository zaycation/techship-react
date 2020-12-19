import "./App.css";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/scroller";
import HomePage from "./pages/HomePage";
import MissionPage from "./pages/MissionPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/mission" component={MissionPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
