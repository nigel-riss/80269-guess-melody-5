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
import ArtistQuestion from '../artist-question/artist-question.jsx';
import GenreQuestion from '../genre-question/genre-question.jsx';


const App = (props) => {
  const {
    mistakesCount,
    questions,
  } = props;

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
          <ArtistQuestion
            onAnswer={() => {}}
            question={questions[1]}
          />
        </Route>
        <Route path="/dev-genre" exact>
          <GenreQuestion
            onAnswer={() => {}}
            question={questions[0]}
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
