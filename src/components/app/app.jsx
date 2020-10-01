import React from 'react';
import Welcome from '../welcome/welcome.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {mistakesCount} = props;

  return (
    <Welcome
      mistakesCount={mistakesCount}
    />
  );
};


App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};


export default App;
