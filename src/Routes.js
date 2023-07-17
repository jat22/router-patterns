import React, {useState, useEffect} from "react";
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";
import Colors from "./colors/Colors"
import NewColor from "./colors/NewColor"
import Color from "./colors/Color"
import { Switch, Route} from "react-router-dom"

const Routes = ({ dogs }) => {

	const initialColors = JSON.parse(localStorage.getItem('colors')) || 
		[
			{ name:"red", color: "#FF0000"},
			{name: "green", color: "#00FF00"}, 
			{name: "blue", color: "#0000FF"}
		]

	const [colors, setColors] = useState(initialColors)

	useEffect(() => {
		localStorage.setItem("colors", JSON.stringify(colors))
	}, [colors])

	const handleSubmit = (e, name, color) => {
		e.preventDefault();
		addColor(name, color)
		window.location.href = '/colors'
	}

	const addColor = (name, color) => {
		setColors(colors => [...colors, {name:name, color:color}])
	}
	
	return(
		<Switch>
			<Route exact path="/dogs"><Dogs dogs={dogs}/></Route>
			<Route exact path="/dogs/:name">
				<DogDetails dogs={dogs}/>
			</Route>
			<Route exact path="/colors"><Colors colors={colors}/></Route>
			<Route exact path="/colors/new"><NewColor handleSubmit={handleSubmit} /></Route>
			<Route exact path="/colors/:name"><Color colors={colors}/></Route>
			<Route path="/colors/"></Route>
		</Switch>
	)
}



export default Routes