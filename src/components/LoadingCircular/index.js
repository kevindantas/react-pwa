import React from 'react';
import './style.css';

const LoadingCircular = ({ style, text = 'Carregando...' }) => (
    <div className="LoadingCircular" style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 72.19">
            <g id="ellipses">
                <ellipse className="cls-1" cx="40.5" cy="36.1" rx="40" ry="16.31"/>
                <ellipse className="cls-1" cx="40.5" cy="36.1" rx="16.31" ry="40" transform="matrix(0.87, -0.5, 0.5, 0.87, -12.62, 25.09)"/>
                <ellipse className="cls-1" cx="40.5" cy="36.1" rx="40" ry="16.31" transform="translate(-11.01 53.12) rotate(-60)"/>
            </g>
        </svg>
        <p>{ text }</p>
    </div>
);

export default LoadingCircular;
