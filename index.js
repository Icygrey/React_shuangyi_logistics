import { Divider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./src/Home";

import AboutUs from "./src/aboutUs/AboutUs";
import ContactUs from "./src/contactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // 这里添加 router下的route跳转关系和路径

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/aboutUs">
          <AboutUs />
        </Route>

        <Route path="/contactUs">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
