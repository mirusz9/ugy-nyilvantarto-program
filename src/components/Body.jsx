import React, { Component } from "react";
import AddUgyForm from "./AddUgyForm/AddUgyForm";
import styles from "./Body.module.css";

class Body extends Component {
	render() {
		return (
			<div className={styles.body}>
				<AddUgyForm />
			</div>
		);
	}
}

export default Body;
