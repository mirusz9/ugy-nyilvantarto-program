import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PeresUgyForm from "./PeresUgyForm";

import styles from "./AddUgyForm.module.css";

class AddUgyForm extends Component {
	render() {
		return (
			<div className={styles.addUgyFormContainer}>
				<form>
					<div id={styles.topBar}>
						{/*TODO change theese into buttons and save it in state*/}
						<input
							className={styles.hidden}
							type="radio"
							id={styles.peres}
							name="peres"
							defaultChecked
						/>
						<label htmlFor={styles.peres}>Peres</label>
						<input
							className={styles.hidden}
							type="radio"
							id={styles.nemPeres}
							name="peres"
						/>
						<label htmlFor={styles.nemPeres}>Nem peres</label>
						<button type="button" id={styles.closeButton}>
							<AiOutlineClose id={styles.closeIcon} size="2rem" />
						</button>
					</div>
					<PeresUgyForm />
				</form>
			</div>
		);
	}
}

export default AddUgyForm;
