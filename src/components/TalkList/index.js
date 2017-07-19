import React, { Component } from 'react'
import TalkListItem from '../TalkListItem'
import logo from '../../logo.svg';

export default class TalkList extends Component {
  state = {
    talks: [], 
  }

  componentWillMount() {
    fetch('http://private-9fea0e-reactpwa.apiary-mock.com/talks')
      .then(response => response.json())
      .then((response) => {
        this.setState({
          talks: response
        });
      })
      .catch((e, res) => console.log('error: ',e))
  }

  renderTalks() {
    return this.state.talks.map((talk) => {
      return (
        <TalkListItem key={talk.id} talk={talk} />
      );
    });
  }
  
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ul>
          { this.renderTalks() }
        </ul>
      </div>
    );
  }
}
