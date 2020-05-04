import React, {Component} from 'react';

import './App.css';

import RecipeContainer from './RecipeContainer/index.js'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn:false,
			loggedInUsername: '' 
		}
	}
	render() {
		return(
			<div>
				<div className="header-div">
					<h1>Munchies and More!</h1>
					<h3>A place to find and share your favorite recipes and tutorials</h3>
					<p>Need a nav bar with login and user info too</p>
				</div>
				{
					this.state.loggedIn
					?
					<RecipeContainer />
					:
					<h3>Not logged in. Please Log in or Register.</h3>
				}
			</div>
		);
	}
}


