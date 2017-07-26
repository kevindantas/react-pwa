/* eslint import/no-webpack-loader-syntax: off */
 
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Bundle from './Bundle'
import TalkList from './components/TalkList'
import loadTalkDetails from 'bundle-loader?lazy!./components/TalkDetails'

import './App.css';

const TalkDetails = (props) => (
  <Bundle load={loadTalkDetails}>
    {(Comp) => (
      <Comp {...props} />
    )}
  </Bundle>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={TalkList} exact />
            <Route path="/talk/:id" component={TalkDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
