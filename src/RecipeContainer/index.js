import React, {Component} from 'react'
import RecipeList from '../RecipeList/index.js'

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
			const recipesJson = await recipesResponse.json()
			this.setState({
				recipes: recipesJson.data
			})
		} catch(err) {
			console.error("error in get recipes",err)
		}

	}

	render() {
		return(
			<React.Fragment>
				<h2>RecipeContainer</h2>
				<RecipeList recipes={this.state.recipes}/>
			</React.Fragment>
		)
	}
}