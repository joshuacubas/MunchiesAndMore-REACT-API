import React from 'react'
import '../index.css'
export default function Header(props){ 
	const headerStyle = {
		textAlign:"right",
		padding: "10px",
		backgroundColor : "#DDDDDD",
	}
	return(
		<nav style={headerStyle}>
			<span>Logged in as {props.username}.&nbsp;</span>
			<span className='fake-link' onClick={props.logout}>Log Out</span>
			
		</nav>
	)
}