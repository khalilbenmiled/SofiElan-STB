import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/navBar"
import Accueil from "./components/accueil"
import Profile from "./components/profile"
import Companies from "./components/companies"

function App() {
  return (
    <div class="wrapper">

    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path="/" component={Accueil} exact/>
        <Route path="/Profile" component={Profile} exact/>
        <Route path="/Companies" component={Companies} exact/>
      </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
