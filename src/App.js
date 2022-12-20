import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CustomerList from "./containers/ListCustomerContainer";
import CustomerAdd from "./containers/AddCustomerContainer";
import CustomerEdit from "./containers/EditCustomerContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home">
          <Redirect to="/customer/list" />
        </Route>
        <Route path="/customer/:slug">
          <Home>
            <Navbar />
            <Menu />
            <div className="content-wrapper py-2">
              <Route exact path="/customer/list" component={CustomerList} />
              <Route exact path="/customer/add" component={CustomerAdd} />
              <Route exact path="/customer/edit/:id" component={CustomerEdit} />
            </div>
            <Footer />
          </Home>
        </Route>
        <Route path="*" render={() => <div>Page not found!</div>} />
      </Switch>
    </Router>
  );
};

export default App;
