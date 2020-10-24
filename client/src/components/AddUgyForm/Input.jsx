import React, { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
	render() {
		const { type, name, required, big, children } = this.props;
		return (
			<div className={styles.inputContainer}>
				<input
					className={`${styles.input} ${ big ? styles.big : null}`}
					type={type}
					name={name}
					placeholder={children}
					required={required}
				/>
			</div>
		);
	}
}

export default Input;
