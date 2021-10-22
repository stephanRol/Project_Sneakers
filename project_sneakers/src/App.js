import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sneakers from "./pages/Sneakers/Sneakers";
import Contact from "./pages/Contact/Contact";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Error404 from "./pages/Error404/Error404";
import "./css/normalize.css";
import "./css/main.css";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./helpers/ScrollToTop";
import { CartProvider } from "./helpers/CartContext";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <CartProvider>
          <ScrollToTop />
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/sneakers" component={Sneakers} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="*" component={Error404} />
          </Switch>
        </CartProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
