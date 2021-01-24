import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from 'recoil';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <RecoilRoot>
    <Auth0Provider
      domain="skewl-frontend.eu.auth0.com"
      clientId="o22b8do16lagfkHLqWMJMPQj6x67tMtU"
      redirectUri={window.location.origin}
    >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Auth0Provider>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();

