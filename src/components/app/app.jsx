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
import Artist from '../artist/artist.jsx';
import Genre from '../genre/genre.jsx';


const App = (props) => {
  const {mistakesCount} = props;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome mistakesCount={mistakesCount}/>
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
        <Route path="/dev-artist" exact>
          <Artist/>
        </Route>
        <Route path="/dev-genre" exact>
          <Genre/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};


export default App;
