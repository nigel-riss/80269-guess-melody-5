import {ActionType} from '../../action.js';
import {extend} from '../../../utils.js';
import questions from '../../../mocks/questions.js';


const initialState = {
  questions,
};


const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};

export {gameData};
