import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import {reducer} from './store/reducer.js';


const Settings = {
  MISTAKES_COUNT: 4,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
    <Provider store={store}>
      <App
        mistakesCount={Settings.MISTAKES_COUNT}
        questions={questions}
      />
    </Provider>,
    document.getElementById(`root`)
);
