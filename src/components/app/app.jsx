import React from 'react';
import Welcome from '../welcome/welcome.jsx';


const App = (props) => {
  const {mistakesCount} = props;

  return (
    <Welcome
      mistakesCount={mistakesCount}
    />
  );
};


export default App;
