import React from 'react';
import { Link } from 'react-router-dom';
import { DateIcon, TimeIcon, LocationIcon, SeatIcon } from '../../icons';
import './style.css';

const TalkListItem = (props) => {
  const { talk } = props;
  const months = ['Janeiro', 'Fevereiro', 'Março',  'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const date = new Date(talk.time);
  const talkDay = date.getDate();
  const talkMonth = months[date.getMonth()];
  const talkHour = date.getHours();

  return (
    <li className="TalkListItem">
      <h2 className="name">
        <Link to={`/talk/${talk.id}`}>{ talk.name }</Link>
      </h2>
      <div className="row location">
        <LocationIcon />
        <span className="--name">{ talk.venue ? talk.venue.name : '' } </span> 
        <span className="--address">{ talk.venue ? talk.venue.address_1 : '' }</span>
      </div>
      <div className="row space-between infos">
        <time className="date">
          <DateIcon />
          { talkDay }
          <small>/{ talkMonth }</small>
        </time>

        <time className="hour">
          <TimeIcon />
          { talkHour }h
        </time>

        <div className="quantity">
          <SeatIcon /> 
          { talk.yes_rsvp_count }
        </div>
      </div>      
    </li>
  )
};

export default TalkListItem;
