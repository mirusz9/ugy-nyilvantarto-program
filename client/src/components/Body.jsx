import React, { Component } from "react";
import AddUgyForm from "./AddUgyForm/AddUgyForm";
import styles from "./Body.module.css";
import CaseListItem from "./CaseListItem/CaseListItem";

class Body extends Component {
	render() {
		return (
			<div className={styles.body}>
				{/* <AddUgyForm /> */}
				<CaseListItem/>
				<CaseListItem/>
				<CaseListItem/>
				<CaseListItem/>

			</div>
		);
	}
}

export default Body;
