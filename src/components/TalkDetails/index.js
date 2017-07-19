import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationButton from '../NotificationButton';
import { BackIcon, DateIcon, TimeIcon, LocationIcon } from '../../icons';
import './style.css';

export default class TalkDetails extends Component {
  render() {
    const { talk } = this.props;
    return (
      <section className="TalkDetails">
        <header className="App-header">
          <Link to="/" className="row">
            <BackIcon fill="#fff" />
          </Link>
          <h1>React SP #11 - Progressive Web Apps</h1>
        </header>

        <div className="content">
          <div className="date-infos">
            <div className="date">
              <DateIcon />
              <div className="data">
                <small>Data</small>
                <h3>
                  26
                  <small>Julho</small>
                </h3>
              </div>
            </div>

            <div className="time">
              <TimeIcon />
              <div>
                <small>Horário</small>
                <h3>
                  19h
                </h3>
              </div>
            </div>
          </div>


          <div className="location">
            <LocationIcon />
            <div>
              <h3>Pagar.me</h3>
              <p> Fidêncio Ramos, 308, 10º andar</p>
            </div>
          </div>

          <NotificationButton label="Receber notificação" />

          <div className="numbers">
            <div className="going">
              <h2 className="num">58</h2>
              <small>INDO</small>
            </div>

            <div className="going">
              <h2 className="num">58</h2>
              <small>TALVEZ</small>
            </div>

            <div className="going">
              <h2 className="num">58</h2>
              <small>TALVEZ</small>
            </div>
          </div>

          <div className="description">
            <p>Nest 11º edição teremos o Kevin Dantas, ganhador do último Code In The Dark Brasil, falando sobre PWA (Progressive Web Apps) feitas com React. Restam apenas 10 vagas. Evento gratuito. Acesse também reactconfbr.com.br, 7 de Outubro em São Paulo no Teatro Augusta. Ingressos limitados.</p>
            <p>Nest 11º edição teremos o Kevin Dantas, ganhador do último Code In The Dark Brasil, falando sobre PWA (Progressive Web Apps) feitas com React. Restam apenas 10 vagas. Evento gratuito. Acesse também reactconfbr.com.br, 7 de Outubro em São Paulo no Teatro Augusta. Ingressos limitados.</p>
            <p>Nest 11º edição teremos o Kevin Dantas, ganhador do último Code In The Dark Brasil, falando sobre PWA (Progressive Web Apps) feitas com React. Restam apenas 10 vagas. Evento gratuito. Acesse também reactconfbr.com.br, 7 de Outubro em São Paulo no Teatro Augusta. Ingressos limitados.</p>
          </div>
        </div>

      </section>
    );
  }
}
