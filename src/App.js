import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./Pages/Booking/Booking";
import NotFounds from "./Pages/NotFound/NotFounds";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>{" "}
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFounds></NotFounds>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
