import React, { Component } from "react";
import styles from "./FormSection.module.css";

class FormSection extends Component {
	render() {
		return (
			<fieldset className={styles.fieldset}>
				<legend className={styles.legend}>{this.props.label}</legend>
				{this.props.children}
			</fieldset>
		);
	}
}

export default FormSection;
