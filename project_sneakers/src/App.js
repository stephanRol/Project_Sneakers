import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import "./css/normalize.css";
import "./css/main.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
