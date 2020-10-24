import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import styles from "./App.module.css";

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Header />
				<Body />
			</div>
		);
	}
}

export default App;
