import {
  loadQuestions,
} from './action.js';


const fetchQuestions = () => (dispatch, _getState, api) => (
  api.get(`/questions`)
    .then(({data}) => dispatch(loadQuestions(data)))
);


export {
  fetchQuestions,
};
