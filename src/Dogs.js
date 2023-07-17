import React from "react";
import "./Dogs.css";
import { Link } from "react-router-dom";


const Dogs = ({ dogs }) => {
	return (
		<>
			<h1>Dogs</h1>
			{dogs.map(dog => (
				<div key={dog.name}>
					<h2>{dog.name}</h2>
					<h3>Age {dog.age}</h3>
					<img src={`/${dog.src}.jpg`} />
					<h5><Link to={`dogs/${dog.name}`}>Details</Link></h5>
				</div>
				)
			)}
		</>

	)
}

export default Dogs