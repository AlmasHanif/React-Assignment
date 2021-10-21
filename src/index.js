import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './components/MediaCard';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import logo from './logo.svg';
import image from './image.jpg';
import Gate from './components/Gate';

ReactDOM.render(
  <React.StrictMode>
    <MediaCard title='i am title'  body={(<>i am <b><i>" body" </i></b></>)} image={image} />
    <Gate IsOpen = {true} speed = {90} />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
