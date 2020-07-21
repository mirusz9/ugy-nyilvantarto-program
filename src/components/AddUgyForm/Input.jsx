import React, { Component } from "react";

class Input extends Component {
	render() {
		const { type, name, placeholder, required } = this.props;
		return (
			<div>
				<input type={type} name={name} placeholder={placeholder} required={required}/>
			</div>
		);
	}
}

export default Input;
