import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from '../welcome/welcome.jsx';
import Login from '../login/login.jsx';
import Result from '../result/result.jsx';
import Lose from '../lose/lose.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from '../../browser-history.js';
import {MAX_MISTAKES_COUNT} from '../../const.js';


const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              mistakesCount={MAX_MISTAKES_COUNT}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        >
        </Route>
        <Route exact
          path="/login"
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <PrivateRoute
          exact
          path="/result"
          render={({history}) => (
            <Result
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/lose"
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route path="/game">
          <GameScreen/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {};


export default App;
