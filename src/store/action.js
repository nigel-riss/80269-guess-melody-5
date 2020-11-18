import {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
} from '../game.js';
import {GameType} from '../const.js';


const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};


const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: 1,
});

const resetGame = () => ({
  type: ActionType.RESET_GAME,
});

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


export {
  ActionType,
  incrementMistakes,
  incrementStep,
  resetGame,
};
