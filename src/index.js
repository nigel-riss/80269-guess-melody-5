import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api.js';
import App from './components/app/app.jsx';
import rootReducer from './store/reducers/root-reducer.js';
import {requireAuthorization} from './store/action.js';
import {
  fetchQuestions,
  checkAuth,
} from './store/api-actions.js';
import {AuthorizationStatus} from './const.js';


const api = createAPI(() => store
  .dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


store.dispatch(fetchQuestions());
store.dispatch(checkAuth());


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
