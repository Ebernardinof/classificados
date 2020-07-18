import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/cart/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </>
  );
}

export default App;
