import React, {Component} from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer/index.js'
import LoginRegisterForm from './LoginRegisterForm'



export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn:false,
			loggedInUsername: '' 
		}
	}
	register = async (registerInfo) => {
		console.log("register() called in app.js <=",registerInfo);
		const url = process.env.REACT_APP_API_URL + "/api/v1/creators/register"
		try{
			const registerResponse = await fetch(url, {
				credentials:'include',
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {
					'Content-Type':'application/json'
				}
			})
			console.log('registerResponse',registerResponse)
			const registerJson = await registerResponse.json()
			console.log("registerJson",registerJson)

			if(registerResponse.status === 201){
				this.setState({
					loggedIn: true,
					loggedInUsername: registerJson.data.username
				})
			}
		} catch(err) {
			console.error("error trying to register w/ api",err)
		}
	}
	login = async (loginInfo) => {
		console.log("login() called in app.js <=",loginInfo)
		const url = process.env.REACT_APP_API_URL + '/api/v1/creators/login'
		try{
			const loginResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log("loginResponse",loginResponse)
			const loginJson = await loginResponse.json()
			console.log("loginJson",loginJson)

			if(loginResponse.status === 200){
				this.setState({
					loggedIn: true,
					loggedInUsername: loginJson.data.username
				})
			}
		} catch(err){
			console.error("error trying to login, app.js",err)
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
					<LoginRegisterForm 
						login={this.login}
						register={this.register}
					/>
				}
			</div>
		);
	}
}


