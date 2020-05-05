import React, {Component} from 'react'
import {Form,Button,Label,Segment,Checkbox} from 'semantic-ui-react'

export default class NewRecipeForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			ingredients: '',
			directions: '',
			vegan: false,
			gluten_free: '',
		}
	}

	handleChange = (event) => {
		console.log(event)
		console.log('event.target.name',event.target.name)
		console.log('event.target.value',event.target.value)

		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createRecipe(this.state)
	}

	handleClick = (event) => {
		this.setState({
			[event.target.name]: !this.state[event.target.name]
		})
	}

	render(){
		console.log("this.state in NewRecipeForm",this.state)
		return(
			<Segment>
				<h4>Add new recipe</h4>
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
					/>
					<Label>Gluten-free :</Label>
					<Form.Input 
						type="checkbox"
						name='gluten_free'
						value={this.state.gluten_free}
						checked={this.state.gluten_free}
						onClick={this.handleClick}
					/>

					<Button type="Submit">Add Recipe</Button>
				</Form>
			</Segment>
		)
	}
}