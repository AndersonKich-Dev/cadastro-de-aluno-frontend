import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fontes from './fonts'
import GlobalStyle from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Fontes/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


