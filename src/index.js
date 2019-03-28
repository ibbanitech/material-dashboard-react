import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

import * as firebase from "firebase";
import Forgotpass from "./views/Forgotpass/Forgotpass";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcQ_iC0kHuqbNorCaqoU8ul7s4TilrgSc",
    authDomain: "ayushya-fb771.firebaseapp.com",
    databaseURL: "https://ayushya-fb771.firebaseio.com",
    projectId: "ayushya-fb771",
    storageBucket: "ayushya-fb771.appspot.com",
    messagingSenderId: "975328309181"
  };
  firebase.initializeApp(config);

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/forgotPass" component={Forgotpass}/> 
      <Redirect from="/" to="/admin/dashboard" />
      </Switch>
  </Router>,
  document.getElementById("root")
);
