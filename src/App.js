import React from 'react';

import './App.css';

import RecipeContainer from './RecipeContainer/index.js'

function App() {
	console.log(process.env)
  return (
    <div>
      <h1>Project 3</h1>
      <RecipeContainer />
    </div>
  );
}

export default App;
