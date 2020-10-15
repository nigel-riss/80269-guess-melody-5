import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';


const Settings = {
  MISTAKES_COUNT: 4,
};


ReactDOM.render(
    <App
      mistakesCount={Settings.MISTAKES_COUNT}
      questions={questions}
    />,
    document.getElementById(`root`)
);
