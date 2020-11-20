import browserHistory from '../../browser-history.js';
import {ActionType} from '../action.js';


const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};


export {redirect};
