import React from 'react';
import { DateIcon, TimeIcon, LocationIcon, SeatIcon } from '../../icons';
import './style.css';

const TalkListItem = (props) => {
  const { talk } = props;
  const date = new Date(talk.date);
  console.log(date);
  const talkDay = date.getDate();
  const talkMonth = date.getMonth();
  const talkHour = date.getHours();

  return (
    <li className="TalkListItem">
      <h2 className="name">
        <a href="#">{ talk.name }</a>
      </h2>
      <div className="row location">
        <LocationIcon />
        <span className="--name">Pagar.me | </span> 
        <span className="--address">Rua awefijweoi awfwe 287</span>
      </div>
      <div className="row space-between infos">
        <time className="date">
          <DateIcon />
          { talkDay }
          <span>{ talkMonth }</span>
        </time>

        <time className="hour">
          <TimeIcon />
          { talkHour }
        </time>

        <div className="quantity">
          <SeatIcon /> 
          { talk.going || 0 }
        </div>
      </div>      
    </li>
  )
};

export default TalkListItem;
