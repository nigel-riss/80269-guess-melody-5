import {
  loadQuestions,
  redirectToRoute,
  requireAuthorization,
} from './action.js';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus} from '../const.js';


const checkAuth = () => (dispatch, _getState, api) =>
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});


const fetchQuestions = () => (dispatch, _getState, api) =>
  api.get(APIRoute.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)));


const login = ({login: email, password}) => (dispatch, _getState, api) =>
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
    .catch(() => {});


export {
  checkAuth,
  fetchQuestions,
  login,
};
