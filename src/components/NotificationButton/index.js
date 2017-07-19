import React from 'react';
import './style.css';

const handleOnClick = () => {
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                new Notification('Tô vivão!');
            } else {
                console.log('Não tô vivão :(');
                new Notification('Não tô vivão :(');
            }
        })
}

const NotificationButton = ({ label }) => (
    <button className="NotificationButton" onClick={handleOnClick}>{ label }</button>
);

export default NotificationButton;