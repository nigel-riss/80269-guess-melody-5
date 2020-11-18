import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  incrementStep,
  incrementMistakes,
} from '../../store/action.js';
import {
  GameType,
  MAX_MISTAKES_COUNT,
} from '../../const.js';
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
    mistakes,
  } = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKES_COUNT) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result" />
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
  mistakes: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistakes(question, answer));
  },
});


export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
