import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from '../welcome/welcome.jsx';
import Login from '../login/login.jsx';
import Result from '../result/result.jsx';
import Lose from '../lose/lose.jsx';
import GameScreen from '../game-screen/game-screen.jsx';


const App = (props) => {
  const {
    mistakesCount,
    questions,
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              mistakesCount={mistakesCount}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        >
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/result" exact>
          <Result/>
        </Route>
        <Route path="/lose" exact>
          <Lose/>
        </Route>
        <Route path="/game">
          <GameScreen
            questions={questions}
          />
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array,
};


export default App;
