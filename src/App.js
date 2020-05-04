import React from 'react';

import './App.css';

import RecipeContainer from './RecipeContainer/index.js'

function App() {
	console.log(process.env)
  return (
    <div>
    	<div className="header-div">
      		<h1>Munchies and More!</h1>
      		<h3>A place to find and share your favorite recipes and tutorials</h3>
      		<p>Need a nav bar with login and user info too</p>
      	</div>
      	<RecipeContainer />
    </div>
  );
}

export default App;
