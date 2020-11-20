import {
  loadQuestions,
  redirectToRoute,
  requireAuthorization,
} from './action.js';
import {AuthorizationStatus} from '../const.js';


const checkAuth = () => (dispatch, _getState, api) =>
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});


const fetchQuestions = () => (dispatch, _getState, api) =>
  api.get(`/questions`)
    .then(({data}) => dispatch(loadQuestions(data)));


const login = ({login: email, password}) => (dispatch, _getState, api) =>
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/result`)))
    .catch(() => {});


export {
  checkAuth,
  fetchQuestions,
  login,
};
