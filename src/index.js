import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Listen when the user would be prompted to add to homescreen
window.addEventListener("beforeinstallprompt", function(e) { 
  // Don't show the prompt the user to add to homescreen
  e.preventDefault();

  // Store the prompt event on a global variable
  // So we can use window.deferredPrompt.prompt() when we really want
  window.deferredPrompt = e;

  // log the platforms provided as options in an install prompt 
  console.log(e); // e.g., ["web", "android", "windows"] 
  return false;
});