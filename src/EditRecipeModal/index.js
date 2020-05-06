import React, {Component} from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditRecipeModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.recipeToEdit.name,
			ingredients: props.recipeToEdit.ingredients,
			directions: props.recipeToEdit.directions,
			vegan: props.recipeToEdit.vegan,
			gluten_free: props.recipeToEdit.gluten_free,
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleClick = (event) => {
		this.setState({
			[event.target.name]: !this.state[event.target.name]
		})
	}

	handleSubmit=(event)=>{
		event.preventDefault()
		this.props.updateRecipe(this.state)
	}

	render(){
		return (
			<Segment>
				<h4>Edit recipe</h4>
				<Form onSubmit={this.handleSubmit}> 
					<Label>Name :</Label>
					<Form.Input 
						type="text"
						name='name'
						value={this.state.name}
						placeholder="Enter recipe name"
						onChange={this.handleChange}
					/>
					<Label>Ingredients :</Label>
					<Form.Input 
						type="text"
						name='ingredients'
						value={this.state.ingredients}
						placeholder="Enter recipe ingredients"
						onChange={this.handleChange}
			
					/>
					<Label>Directions :</Label>
					<Form.Input 
						type="text"
						name='directions'
						value={this.state.directions}
						placeholder="Enter recipe directions"
						onChange={this.handleChange}
				
					/>
					<Label>Vegan :</Label>
					<Form.Input 
						type="checkbox"
						name='vegan'
						value={this.state.vegan}
						label="Check box if recipe is vegan"
						onClick={this.handleClick}
						checked={this.state.vegan}
						
					/>
					<Label>Gluten-free :</Label>
					<Form.Input 
						type="checkbox"
						name='gluten_free'
						value={this.state.gluten_free}
						label="Check box if recipe is gluten-free"
						onClick={this.handleClick}
						checked={this.state.gluten_free}
						
					/>

					<Button type="Submit">Add changes to Recipe</Button>
				</Form>
			</Segment>
		)
	}
} 