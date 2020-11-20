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
import {
  AppRoute,
  MAX_MISTAKES_COUNT,
} from '../../const.js';


const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <Welcome
              mistakesCount={MAX_MISTAKES_COUNT}
              onPlayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        >
        </Route>
        <Route exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={({history}) => (
            <Result
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route exact
          path={AppRoute.LOSE}
          render={({history}) => (
            <Lose
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route path={AppRoute.GAME}>
          <GameScreen/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {};


export default App;
