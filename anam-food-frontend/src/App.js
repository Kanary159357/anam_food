import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import DetailView from './pages/DetailView';
import SearchResult from './pages/SearchResult';

function App() {
  return (
      <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/detailView">Detail View</Link>
            </li>
            <li>
              <Link to="/searchResult">Search Result</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/searchResult">
            <SearchResult/>
          </Route>
          <Route path="/detailView">
            <DetailView/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
