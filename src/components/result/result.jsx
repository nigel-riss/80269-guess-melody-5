import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {resetGame} from '../../store/action.js';


const Result = (props) => {
  const {
    mistakesCount,
    questionsCount,
    onReplayButtonClick,
    resetGameAction,
  } = props;

  const correctAnswersCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctAnswersCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGameAction();
          onReplayButtonClick();
        }}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};


Result.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGameAction: PropTypes.func.isRequired,
};


const mapStateToProps = ({GAME}) => ({
  questionsCount: GAME.step,
  mistakesCount: GAME.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  }
});


export {Result};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
