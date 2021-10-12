import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login/Login";
import NotFounds from "./Pages/NotFound/NotFounds";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
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
          <Route exact path="/login">
            <Login></Login>
          </Route>{" "}
          <Route path="*">
            <NotFounds></NotFounds>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
