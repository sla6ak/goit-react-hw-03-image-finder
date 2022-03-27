import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './main.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; //скелетон загрузок
import 'react-toastify/dist/ReactToastify.css'; // попапы

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
