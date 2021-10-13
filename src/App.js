import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login/Login";
import NotFounds from "./Pages/NotFound/NotFounds";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>{" "}
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>{" "}
            <Route path="*">
              <NotFounds></NotFounds>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
