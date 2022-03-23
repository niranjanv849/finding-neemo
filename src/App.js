import "./App.css";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Social from "./components/Social";
import Entertainment from "./components/Entertainment";
import Shopping from "./components/Shopping";
import Food from "./components/Food";
import Health from "./components/Health";
import Settings from "./components/Settings";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
