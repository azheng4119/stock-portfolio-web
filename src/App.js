import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login'
import './App.css';

class App extends React.Component {
  render() {
    const loginComponent = () => (<Login></Login>);
    return (
      <Router>
        <Switch>
           <Route exact path="/" render={loginComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
