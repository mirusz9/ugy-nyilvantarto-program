import React, { Component } from "react";
import styles from "./Header.module.css";
import { AiOutlinePlus } from "react-icons/ai";

class Header extends Component {
	render() {
		return (
			<div className={styles.HeaderContainer}>
				<h1 id={styles.appName}>Vidéki law</h1>
				<button id={styles.addButton}>
					<AiOutlinePlus size="2.5rem" id={styles.plusIcon} />
					Add
				</button>
			</div>
		);
	}
}

export default Header;
