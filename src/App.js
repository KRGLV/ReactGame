import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Main from './game/main';
import rootReducer from './game/reducers/index';
import thunk from 'redux-thunk';
import './App.css';

const defaultState = {
  currentPlayer: 'player1'
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </Provider>
    );
  }
}

export default App;
