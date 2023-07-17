import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Color.css"

const Color = ({colors}) => {
	const { name } = useParams();

	const color = colors.find(c => c.name === name);
	if(!color) window.location.href = "/colors"
	
	return (
		<div className="fullWindow" style={{backgroundColor : color.color}}>
			<h1>This is {color.name}</h1>
			<Link to="/colors">Back to All Colors</Link>
		</div>
	)
}


export default Color