import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <header>
        <SearchBar />
      </header>
      <main>
        <div className="container">
          <Logs />
        </div>
      </main>
      <footer />
    </Fragment>
  );
};

export default App;
