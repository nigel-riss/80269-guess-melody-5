import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import genreQuestionType from '../../types/genre-question.js';

class GenreQuestion extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {
      onAnswer,
      question,
      renderPlayer,
      children,
    } = this.props;
    const {answers: userAnswers} = this.state;
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

          {children}
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
                {renderPlayer(answer.src, i)}
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
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};


export default GenreQuestion;
