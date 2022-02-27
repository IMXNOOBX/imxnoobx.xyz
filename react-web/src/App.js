import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Test from './components/Test';
import NotFoundError from './components/404';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main}/>
      <Route exact path="/test" component={Test}/>
      <Route component={NotFoundError}/>
      {/* <Main />
      <Test /> */}
    </div>
  );
}

export default App;
