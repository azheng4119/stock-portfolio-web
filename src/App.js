import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login'
import Vendor from './components/vendor'
import Transactions from './components/transactions'
import './App.css';
import Portfolio from './pages/portfolio';
import Header from './components/header';

class App extends React.Component {
  render() {
    const loginComponent = () => (<Login></Login>);
    const vendorComponent = () => (<Vendor></Vendor>);
    const transactionsComponenet = () => (<Transactions></Transactions>);
    const landingComponenet = () => (<Portfolio></Portfolio>)
    return (
      <Router>
                  <Header></Header>
        <Switch>
          <Route exact path="/" render={loginComponent} />
          <Route exact path="/vendor" render={vendorComponent} />
          <Route exact path="/transactions" render={transactionsComponenet} />
          <Route exact path="/portfolio" render={landingComponenet}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
