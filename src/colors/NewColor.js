import React from "react";
import useFields from "./hooks/useFields";
import { Link } from "react-router-dom";

const NewColor = ({ handleSubmit }) => {
	const [formData, handleChange] = useFields({name: "", color:""})

	return (
		<form onSubmit={(e) => handleSubmit(e, formData.name, formData.color) }>
			<input type="text" name="name" id="name" onChange={handleChange}/>
			<input type="color" name="color" id="color" onChange={handleChange}/>
			<button type="submit">Add</button>
			<Link to="/colors">Go Back</Link>
		</form>
	)
}

export default NewColor