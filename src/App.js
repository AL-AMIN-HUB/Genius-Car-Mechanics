import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login/Login";
import NotFounds from "./Pages/NotFound/NotFounds";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddServices/AddService";
import ManageServices from "./Pages/Home/ManageServices/ManageServices";

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
            <Route exact path="/home">
              <Home></Home>
            </Route>{" "}
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>{" "}
            <Route exact path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
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
