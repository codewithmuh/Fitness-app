import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "./Screens/Signup";
import Sign_In from "./Screens/Sign_In";
import Required from "./Screens/Required";
import Email_Verified from "./Screens/Email_Verified";
import Email_Verified_Notification from "./Screens/Email_Verfied_Notification";
import Test from "./Screens/Test";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <Sidebar />
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>

      {/* <Signup /> */}
      {/* <Sign_In /> */}
      {/* <Required /> */}
      {/* <Email_Verified /> */}
      {/* <Email_Verified_Notification /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
