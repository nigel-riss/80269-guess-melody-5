import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';
import {GameType} from '../../const.js';
import ArtistQuestion from '../artist-question/artist-question.jsx';
import GenreQuestion from '../genre-question/genre-question.jsx';
import Mistakes from '../mistakes/mistakes.jsx';
import artistQuestionType from '../../types/artist-question.js';
import genreQuestionType from '../../types/genre-question.js';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.jsx';


const GenreQuestionWrapped = withActivePlayer(withUserAnswer(GenreQuestion));
const ArtistQuestionWrapped = withActivePlayer(ArtistQuestion);


const GameScreen = (props) => {
  const {
    questions,
    step,
    onUserAnswer,
    resetGame,
    mistakes,
  } = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();
    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </ArtistQuestionWrapped>
      );

    case GameType.GENRE:
      return (
        <GenreQuestionWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </GenreQuestionWrapped>
      );
  }

  return <Redirect to="/" />;
};


GameScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        artistQuestionType,
        genreQuestionType,
      ])
  ).isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },

  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});


export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
