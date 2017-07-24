import React, { Component } from 'react'
import TalkListItem from '../TalkListItem'
import LoadingCircular from '../LoadingCircular'
import logo from '../../logo.svg';

export default class TalkList extends Component {
  state = {
    talks: [],
    loading: false,
  }

  componentDidMount() {
    this.setState((state) => ({ loading: true }));

    fetch('http://private-9fea0e-reactpwa.apiary-mock.com/talks')
      .then(response => response.json())
      .then((response) => {
        this.setState((state) => ({
          talks: response,
          loading: false,
        }));
      })
      .catch((e, res) => console.log('error: ',e))
  }

  renderLoading() {
    return this.state.loading ? <LoadingCircular /> : null;
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
          { this.renderLoading() }
          { this.renderTalks() }
        </ul>
      </div>
    );
  }
}
