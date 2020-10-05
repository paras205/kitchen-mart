import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store/store";

import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepage from "./screens/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-wrapper">
          <TopHeader />
          <Header />
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
