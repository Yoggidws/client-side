import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


