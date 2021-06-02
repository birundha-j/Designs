import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import Layouts from './layoutdesigns/layout.js'
import Owndesign from './owndesign/ownlayout';
ReactDOM.render(
  <React.StrictMode>
    <Owndesign />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Owndesign from './owndesign/ownlayout.js'
// ReactDOM.render(
//     <React.StrictMode>
//       <Owndesign />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

