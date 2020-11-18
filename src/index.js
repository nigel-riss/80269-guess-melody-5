import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api.js';
import App from './components/app/app.jsx';
import rootReducer from './store/reducers/root-reducer.js';
import {
  fetchQuestions,
} from './store/api-actions.js';


const api = createAPI(() => {});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);


store.dispatch(fetchQuestions());


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
