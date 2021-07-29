import React from 'react';
import { Provider } from 'react-redux';
import Book from './pages/book';
import { store } from './store';
import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <div className="body">
        <Book />
      </div>
    </Provider>
  );
}

export default App;
