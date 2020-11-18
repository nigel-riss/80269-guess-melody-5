import {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
} from '../game.js';
import {GameType} from '../const.js';


const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  RESET_GAME: `RESET_GAME`,
};


const incrementMistakes = (question, userAnswer) => {
  let isAnswerCorrect = false;

  switch (question.type) {
    case GameType.ARTIST:
      isAnswerCorrect = isArtistAnswerCorrect(question, userAnswer);
      break;

    case GameType.GENRE:
      isAnswerCorrect = isGenreAnswerCorrect(question, userAnswer);
      break;
  }

  return {
    type: ActionType.INCREMENT_MISTAKES,
    payload: isAnswerCorrect ? 0 : 1,
  };
};

const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: 1,
});

const loadQuestions = (questions) => ({
  type: ActionType.LOAD_QUESTIONS,
  payload: questions,
});

const resetGame = () => ({
  type: ActionType.RESET_GAME,
});


export {
  ActionType,
  incrementMistakes,
  incrementStep,
  loadQuestions,
  resetGame,
};
