import React, { useState } from "react"; 


function Random(props) { 
const [count, setRandomCount] = 
	useState(function generateRandomInteger() { 
	return Math.floor(Math.random() * 100); 
}); 
function clickHandler(e) { 
	setRandomCount(Math.floor(Math.random() * 100)); 
} 
return ( 
	<div style={{margin: 'auto', width: 100, display: 'block'}}> 
	<h1> {count} </h1> 
		
	<p> 
		<button style={{color:'red'}} onClick={clickHandler}> Click </button> 
	</p> 

	</div> 
); 
} 

export default Random
