import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MemeList from './components/MemeList';
import './App.css'; // Add some basic CSS styling for the memes

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className='imgflip'>Imgflip Memes</h1>
        <MemeList />
      </div>
    </Provider>
  );
};

export default App;