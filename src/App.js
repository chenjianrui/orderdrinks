import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import OrderList from "./containers/OrderList/OrderList";
import NewOrder from "./containers/NewOrder/NewOrder";
import Edit from "./containers/Edit/Edit";

import "./styles.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/" exact component={OrderList} />
              <Route path="/order" component={NewOrder} />
              <Route path="/edit/:id" component={Edit} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
