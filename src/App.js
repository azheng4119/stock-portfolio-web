import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login'
import Transactions from './components/transactions'
import Portfolio from './pages/portfolio';
import Register from './pages/register';
import './App.css';

class App extends React.Component {
  render() {
    const loginComponent = () => (<Login></Login>);
    const transactionsComponenet = () => (<Transactions></Transactions>);
    const landingComponenet = () => (<Portfolio></Portfolio>);
    const registerPage = () => (<Register></Register>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={loginComponent} />
          <Route exact path="/transactions" render={transactionsComponenet} />
          <Route exact path="/portfolio" render={landingComponenet}/>
          <Route exact path="/register" render={registerPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
