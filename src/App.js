import React from 'react';
import './App.css';
import { Links } from './Components/RouterLinks.js'

export class App extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Links />
      </React.StrictMode>
    );
  };
};



