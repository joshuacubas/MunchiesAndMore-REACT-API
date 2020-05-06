import React from 'react'
import '../index.css'
export default function Header(props){
	return(
		<nav>
			<p className='fake-link' onClick={props.logout}>Log Out</p>
		</nav>
	)
}