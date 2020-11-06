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


const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),

  incrementMistake: (question, userAnswer) => {
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
  },
};


export {
  ActionType,
  ActionCreator,
};
