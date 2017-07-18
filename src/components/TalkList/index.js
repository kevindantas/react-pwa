import React, { Component } from 'react'
import TalkListItem from '../TalkListItem'
import logo from '../../logo.svg';

export default class TalkList extends Component {
  state = {
    talks: [{
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }, {
      name: 'dawdawdaw',
      date: '2017-07-07',
    }], 
  }

  componentWillMount() {
    // fetch('https://api.meetup.com/ReactJS-SP/events?sign=true&key=6d687a6172696d4b477d145a3a14176e&omit=group&status=past,upcoming&desc=1', {
    //   mode: 'cors',
    //   headers: {
    //     ['Access-Control-Request-Method']: 'POST',
    //     ['Access-Control-Request-Headers']: 'X-PINGOTHER, Content-Type'
    //   }
    // })
    // fetch('https://api.meetup.com/ReactJS-SP/events?sign=true&key=6d687a6172696d4b477d145a3a14176e&omit=group&status=past,upcoming&desc=1', {
    //   mode: 'no-cors',
    //   headers: {
    //     'dawdaw': 31231231231
    //   }
    // })
    // fetch(`https://api.meetup.com/ReactJS-SP/events?&sign=true&photo-host=public&desc=1&status=past,upcoming&omit=group`)
    // fetch(`https://secure.meetup.com/oauth2/authorize?client_id=bf5ote0agbauklos1eakaeaio4&response_type=token`)
    fetch('https://api.meetup.com/ReactJS-SP/events?sign=true&key=6d687a6172696d4b477d145a3a14176e&omit=group&status=past,upcoming&desc=1')
      .then(response => {
        console.log(response.headers);
        return response;
      })
      // .then(response => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((e, res) => console.log('error: ',e))
  }

  renderTalks() {
    return this.state.talks.map((talk) => {
      return (
        <TalkListItem talk={talk} />
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
