import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = ({ dogs }) => {
	return (
		<div className="Nav">
			<NavLink key="colors" to="/colors">COLORS</NavLink>
			<NavLink key="dogs" to="/dogs">All Dogs</NavLink>
			{dogs.map(d => (<NavLink key={d} to={`/dogs/${d}`}>{d}</NavLink>))}
		</div>
	)
}

export default Nav;