import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';


const Lose = (props) => {
  const {
    onReplayButtonClick,
    resetGame,
  } = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGame();
          onReplayButtonClick();
        }}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};


Lose.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});


export {Lose};
export default connect(null, mapDispatchToProps)(Lose);
