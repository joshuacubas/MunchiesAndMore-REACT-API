import React from 'react'
import {Item} from 'semantic-ui-react' // add ",Image" next to Item, later to add images
import '../index.css';

export default function RecipeList(props){
	console.log('props.recipes',props.recipes)
	const recipes = props.recipes.map(recipe => {
		const image = recipe.image ? recipe.image : 'https://react.semantic-ui.com/images/wireframe/image.png' ;
		return (
			<Item key={recipe.id} className="RecipeList-Item">
				<Item.Image size='tiny' src={image} />
				<Item.Content>
					<Item.Header>{recipe.name}</Item.Header>
					<Item.Meta>Posted by {recipe.creator.username}</Item.Meta>
					<Item.Description>
						Vegan : {recipe.vegan ? '👍' : '👎'} 
					</Item.Description>
					<Item.Description>
						Gluten-free : {recipe.gluten_free ? '👍' : '👎'} 
					</Item.Description>
				</Item.Content>
			</Item>
		)
	})
	return (
		<React.Fragment>
			<h3>Recipes List:</h3>
			<Item.Group className="RecipeList-ItemGroup">
				{recipes}
			</Item.Group>
		</React.Fragment>
	)
}