import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login'
import Transactions from './components/transactions'
import './App.css';
import Portfolio from './pages/portfolio';

class App extends React.Component {
  render() {
    const loginComponent = () => (<Login></Login>);
    const transactionsComponenet = () => (<Transactions></Transactions>);
    const landingComponenet = () => (<Portfolio></Portfolio>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={loginComponent} />
          <Route exact path="/transactions" render={transactionsComponenet} />
          <Route exact path="/portfolio" render={landingComponenet}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
