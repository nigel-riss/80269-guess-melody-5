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
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.jsx';


const GenreQuestionWrapped = withAudioPlayer(GenreQuestion);
const ArtistQuestionWrapped = withAudioPlayer(ArtistQuestion);


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
};


const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },

  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});


export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
