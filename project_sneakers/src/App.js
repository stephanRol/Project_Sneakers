import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sneakers from "./pages/Sneakers/Sneakers";
import Contact from "./pages/Contact/Contact";
import Error404 from "./pages/Error404/Error404";
import "./css/normalize.css";
import "./css/main.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sneakers" component={Sneakers} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
