import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
	return (
		<>
			<div>
				<h1>COLOR FACTORY</h1>
				<h3><Link to="/colors/new">Add a color</Link></h3>
			</div>
			<div>
				<h4>Please Select A Color</h4>
				{colors.map(c => <h5 key={c.color}><Link to={`/colors/${c.name}`}>{c.name}</Link></h5>)}
			</div>
		</>
	)
}

export default Colors