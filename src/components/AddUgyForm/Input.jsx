import React, { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
	render() {
		const { type, name, placeholder, required } = this.props;
		return (
			<div>
				<input
					className={styles.input}
					type={type}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			</div>
		);
	}
}

export default Input;
