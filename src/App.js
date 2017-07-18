import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import TalkList from './components/TalkList'
import TalkDetails from './components/TalkDetails'

import './App.css';

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
