import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import WrraperComponent from './components/Wrapper';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WrraperComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;