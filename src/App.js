import React from 'react';
import Compa from './Compa';
import Compb from './Compb';

const App = () => {
  return(
    <div>
      <h1>Higher Order Component</h1>
      <Compa name="A"/>
      <Compb name="B"/>
    </div>
  );
}

export default App;
