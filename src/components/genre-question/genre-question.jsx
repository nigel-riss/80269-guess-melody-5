import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import genreQuestionType from '../../types/genre-question.js';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestion extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: 0,
      answers: [false, false, false, false],
    };
  }

  render() {
    const {
      onAnswer,
      question,
    } = this.props;
    const {
      answers: userAnswers,
      activePlayer,
    } = this.state;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle
              className="timer__line"
              cx="390"
              cy="390"
              r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`,
              }}
            />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(e) => {
              e.preventDefault();
              onAnswer(question, this.state.answers);
            }}
          >
            {answers.map((answer, i) => (
              <div key={`${i}-${answer.src}`} className="track">
                <AudioPlayer
                  onPlayButtonClick={() => {
                    this.setState({
                      activePlayer: activePlayer === i ? -1 : i,
                    });
                  }}
                  isPlaying={i === activePlayer}
                  src={answer.src}
                />
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    checked={userAnswers[i]}
                    onChange={(e) => {
                      const value = e.target.checked;

                      this.setState({
                        answer: [
                          ...userAnswers.slice(0, i),
                          value,
                          ...userAnswers.slice(i + 1),
                        ],
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>
                    Отметить
                  </label>
                </div>
              </div>
            ))}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}


GenreQuestion.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: genreQuestionType,
};


export default GenreQuestion;
