import React, { Component } from "react";
import AddUgyForm from "./AddUgyForm/AddUgyForm";
import "./Body.css"

class Body extends Component {
	render() {
		return (
			<div className="body">
				<AddUgyForm />
			</div>
		);
	}
}

export default Body;

