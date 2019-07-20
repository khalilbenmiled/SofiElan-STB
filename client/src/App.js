import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/navBar"
import Accueil from "./components/accueil"
import Profile from "./components/profile"
import Companies from "./components/companies"
import SignInUp from "./components/SignInUp"


function App() {
  return (
    <div class="wrapper">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignInUp} exact/>
        <Route path="/accueil" component={Accueil} exact/>
        <Route path="/Profile" component={Profile} exact/>
        <Route path="/Companies" component={Companies} exact/>
      </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
