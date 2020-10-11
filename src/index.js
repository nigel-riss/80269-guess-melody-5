import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mocks from './mocks/questions.js';


ReactDOM.render(
    <App
      mistakesCount={4}
    />,
    document.getElementById(`root`)
);
