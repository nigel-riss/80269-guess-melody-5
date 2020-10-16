import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const.js';
import ArtistQuestion from '../artist-question/artist-question.jsx';
import GenreQuestion from '../genre-question/genre-question.jsx';
import artistQuestionType from '../../types/artist-question.js';
import genreQuestionType from '../../types/genre-question.js';


class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestion
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );

      case GameType.GENRE:
        return (
          <GenreQuestion
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
    }

    return <Redirect to="/" />;
  }
}


GameScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        artistQuestionType,
        genreQuestionType,
      ])
  ).isRequired,
};


export default GameScreen;
