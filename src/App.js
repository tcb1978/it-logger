import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogmodal';

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
          <AddBtn />
          <AddLogModal />
          <Logs />
        </div>
      </main>
      <footer />
    </Fragment>
  );
};

export default App;
