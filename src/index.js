import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import rootReducer from './store/reducers/root-reducer.js';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
