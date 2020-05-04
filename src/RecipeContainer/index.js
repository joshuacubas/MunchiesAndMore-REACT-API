import React, {Component} from 'react'

export default class RecipeContainer extends Component{
	constructor(props){
		super(props)
		this.state={
			recipes:[],
		}
	}

	componentDidMount(){
		this.getRecipes()
	}

	getRecipes = async () => {
		try {
			const url = process.env.REACT_APP_API_URI + "/api/v1/recipes/"
			const recipesResponse = await fetch(url)
			console.log("recipesResponse promise", recipesResponse)
			const recipesJson = await recipesResponse.json()
			console.log("recipesJson",recipesJson)
		} catch(err) {
			console.error("error in get recipes",err)
		}

	}

	render() {
		return(
			<h2>RecipeContainer</h2>
		)
	}
}