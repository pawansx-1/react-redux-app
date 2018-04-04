// App.js

import React from 'react';
import counter from '../containers/Counter';
import addCounter from '../containers/AddCounter';
import removeCounter from '../containers/RemoveCounter';

const App = () => {
  return (
    <div className="container">
      <counter></counter><br />
      <div className="columns">
        <div className="column is-11">
          <addCounter></addCounter>
        </div>
        <div className="column auto">
          <removeCounter></removeCounter>
        </div>
      </div>
      </div>
  )
}
export default App;