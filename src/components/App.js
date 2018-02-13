import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';

import Booklist from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {
  render() {
      /*
      *
      *       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      * */
    return (
        <div>
            <Booklist/>
            <BookDetail/>
        </div>
    );
  }
}

export default App;
