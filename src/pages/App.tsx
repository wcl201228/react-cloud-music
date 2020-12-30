import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
        </Router>
      </div>
  </Provider>
  );
}

export default App;
