import React, {Component} from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditRecipeModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			ingredients: '',
			directions: '',
			vegan: false,
			gluten_free: false,
		}
	}

	render(){
		return (
			<Segment>
				<h4>Edit recipe</h4>
				<Form> 
					<Label>Name :</Label>
					<Form.Input 
						type="text"
						name='name'
						value={this.state.name}
						placeholder="Enter recipe name"
					/>
					<Label>Ingredients :</Label>
					<Form.Input 
						type="text"
						name='ingredients'
						value={this.state.ingredients}
						placeholder="Enter recipe ingredients"
			
					/>
					<Label>Directions :</Label>
					<Form.Input 
						type="text"
						name='directions'
						value={this.state.directions}
						placeholder="Enter recipe directions"
				
					/>
					<Label>Vegan :</Label>
					<Form.Input 
						type="checkbox"
						name='vegan'
						value={this.state.vegan}
						label="Check box if recipe is vegan"
				
					/>
					<Label>Gluten-free :</Label>
					<Form.Input 
						type="checkbox"
						name='gluten_free'
						value={this.state.gluten_free}
						label="Check box if recipe is gluten-free"
						
					/>

					<Button type="Submit">Add changes to Recipe</Button>
				</Form>
			</Segment>
		)
	}
} 