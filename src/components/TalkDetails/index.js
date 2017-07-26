import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationButton from '../NotificationButton';
import { BackIcon, DateIcon, TimeIcon, LocationIcon } from '../../icons';
import './style.css';

export default class TalkDetails extends Component {

  state = {
    talk: {
      venue: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://private-9fea0e-reactpwa.apiary-mock.com/talks/${id}`)
      .then(response => response.json())
      .then((response) => {
        this.setState((state) => ({
          talk: response,
          loading: false,
        }));
      })
      .catch((e, res) => console.log(e))
  }

  render() {
    const { talk, loading } = this.state;
    const talkDate = new Date(talk.time);
    const months = ['Janeiro', 'Fevereiro', 'Março',  'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return (
      <section className={`TalkDetails $[loading} ? 'loading' : ''`}>
        <header className="App-header">
          <Link to="/" className="row">
            <BackIcon fill="#fff" />
          </Link>
          <h1>{ talk.name }</h1>
        </header>

        <div className="content">
          <div className="date-infos">
            <div className="date">
              <DateIcon />
              <div className="data">
                <small>Data</small>
                <h3>
                  { talkDate.getDate() }
                  <small>{ months[talkDate.getMonth()] }</small>
                </h3>
              </div>
            </div>

            <div className="time">
              <TimeIcon />
              <div>
                <small>Horário</small>
                <h3>
                  { talkDate.getHours() }h
                </h3>
              </div>
            </div>
          </div>


          <div className="location">
            <LocationIcon />
            <div>
              <h3>{ talk.venue.name }</h3>
              <p>{ talk.venue.address_1 }</p>
            </div>
          </div>

          <NotificationButton label="Receber notificação" />

          <div className="numbers">
            <div className="going">
              <h2 className="num">{ talk.yes_rsvp_count }</h2>
              <small>INDO</small>
            </div>

            <div className="going">
              <h2 className="num">{ talk.waitlist_count }</h2>
              <small>TALVEZ</small>
            </div>

            <div className="going">
              <h2 className="num">58</h2>
              <small>TALVEZ</small>
            </div>
          </div>

          <div className="description" dangerouslySetInnerHTML={{ __html: talk.description }}>
                
          </div>

        </div>

      </section>
    );
  }
}
