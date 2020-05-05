import React, {Component} from 'react'
import RecipeList from '../RecipeList/index.js'
import NewRecipeForm from '../NewRecipeForm'

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
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/"
			const recipesResponse = await fetch(url,{
				credentials: 'include'
			})
			const recipesJson = await recipesResponse.json()
			this.setState({
				recipes: recipesJson.data
			})
		} catch(err) {
			console.error("error in get recipes",err)
		}

	}

	createRecipe = async (recipeToAdd) => {
		console.log("createRecipe(), recipe to get added : ",recipeToAdd)
		try{
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/add"
			const createRecipeResponse = await fetch(url,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(recipeToAdd)
			})			
			console.log("createRecipeResponse", createRecipeResponse)
			const createRecipeJson = await createRecipeResponse.json()
			console.log("createRecipeJson that we get back after trying to create a recipe",createRecipeJson)
		} catch(err) {
			console.log("error adding recipe -->createRecipe()",err)
		}

	}

	render() {
		return(
			<React.Fragment>
				<h2>RecipeContainer</h2>
				<NewRecipeForm createRecipe={this.createRecipe} />
				<RecipeList recipes={this.state.recipes}/>
			</React.Fragment>
		)
	}
}