import React, {Component} from 'react'
import RecipeList from '../RecipeList/index.js'
import NewRecipeForm from '../NewRecipeForm'
import EditRecipeModal from '../EditRecipeModal/index.js'

export default class RecipeContainer extends Component{
	constructor(props){
		super(props)
		this.state={
			recipes:[],
			idOfRecipeToEdit: -1
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

	deleteRecipe = async (idOfRecipeToDelete) => {
		const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/" + idOfRecipeToDelete
		try{
			const deleteRecipeResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE'
			})

			console.log("deleteRecipeResponse",deleteRecipeResponse)
			const deleteRecipeJson = await deleteRecipeResponse.json()
			console.log("deleteRecipeJson",deleteRecipeJson)

			if(deleteRecipeResponse.status === 200){
				this.setState({
					dogs: this.state.recipes.filter(recipe=> recipe.id !== idOfRecipeToDelete)
				})
			}
		}catch(err){
			console.error("error deleting redcipe id #{idOfRecipeToDelete}",err)
		}
	} 

	createRecipe = async (recipeToAdd) => {
		console.log("createRecipe(), recipe to get added : ",recipeToAdd)
		try{
			const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/add"
			const createRecipeResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(recipeToAdd)
			})			
			
			const createRecipeJson = await createRecipeResponse.json()
			console.log("createRecipeJson that we get back after trying to create a recipe",createRecipeJson)

			if(createRecipeResponse.status === 201){
				this.setState({
					recipes:[...this.state.recipes, createRecipeJson.data]
				})
			}

		} catch(err) {
			console.log("error adding recipe -->createRecipe()",err)
		}

	}

	editRecipe = (idOfRecipeToEdit)=> {
		console.log("editRecipe(idOfRecipeToEdit) in RecipeContainer", idOfRecipeToEdit)
		this.setState({
			idOfRecipeToEdit: idOfRecipeToEdit
		})
	}

	render() {
		return(
			<React.Fragment>
				<h2>RecipeContainer</h2>
				<NewRecipeForm createRecipe={this.createRecipe} />
				<RecipeList 
					recipes={this.state.recipes} 
					deleteRecipe={this.deleteRecipe}
					editRecipe={this.editRecipe}
				/>
				{
					this.state.idOfRecipeToEdit !== -1 
					&& 
					<EditRecipeModal 
						recipeToEdit={this.state.recipes.find((recipe) => recipe.id === this.state.idOfRecipeToEdit)}
					/>

				}
			</React.Fragment>
		)
	}
}