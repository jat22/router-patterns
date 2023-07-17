import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
	const { name } = useParams();
	const dog = dogs.find(d => d.name === name)
	return (
		
		<>
			<h1>Name: {dog.name}</h1>
			<h2>Age: {dog.age}</h2>
			<img src={`/${dog.src}.jpg`} />
			<h4>Facts:</h4>
			<ul>
				{dog.facts.map((f,i) => <li key={i}>{f}</li>)}
			</ul>
		</>

	)
}

export default DogDetails