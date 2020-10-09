import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store/store";

import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Homepage from "./screens/Home";
import ProductDetail from "./screens/Detail";
import AboutPage from "./screens/About";
import ContactPage from "./screens/Contact";
import ServicePage from "./screens/service";
import ProductPage from "./screens/products";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-wrapper">
          <TopHeader />
          <Header />
          <Switch>
            <Route path="/product/:id" exact component={ProductDetail} />
            <Route path="/about-us" exact component={AboutPage} />
            <Route path="/services" exact component={ServicePage} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/contact-us" exact component={ContactPage} />
            <Route path="/" exact component={Homepage} />
          </Switch>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
