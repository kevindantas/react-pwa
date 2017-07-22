import React from 'react';
import './style.css';

const handleOnClick = () => {
    Notification.requestPermission()
        .then((permission) => {
            // If the user granted permission
            if (permission === 'granted') {
                // Show a notification
                const notification = new Notification('Tô vivão!');
                // Close notification after 3000ms
                setTimeout(() => notification.close(), 3000);
            } else {
                console.log('Não tô vivão :(');
                // Since our user haven't granted permission,
                // these notification will not appear
                new Notification('Não tô vivão :(');
            }
        })
}

const NotificationButton = ({ label }) => (
    <button className="NotificationButton" onClick={handleOnClick}>{ label }</button>
);

export default NotificationButton;