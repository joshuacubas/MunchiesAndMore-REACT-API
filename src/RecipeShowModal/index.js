import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const RecipeShowModal = () => (
	<Modal trigger={<Button>View Recipe</Button>}>
		<Modal.Description>
			<Header>{props.name}</Header>
		</Modal.Description>
		<Modal.Content>
			<strong>Ingredients:</strong>
			<p>{props.ingredients}</p>
		</Modal.Content>
		<Modal.Content>
			<strong>Directions:</strong>
			<p>{props.directions}</p>
		</Modal.Content>
		<Modal.Content>
			<div className="booleans-div">
						
				<Item.Description className="booleans">
					Vegan : {props.vegan ? '✅' : '🚫'} 
				</Item.Description>
				<Item.Description className="booleans">
					Gluten-free : {props.gluten_free ? '✅' : '🚫'} 
				</Item.Description>
			</div>
		</Modal.Content>
	</Modal>
)

export default RecipeShowModal