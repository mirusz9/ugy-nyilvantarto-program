import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PeresUgyForm from "./PeresUgyForm";

import styles from "./AddUgyForm.module.css";

class AddUgyForm extends Component {
	state = {
		peres: true,
	}

	handleChooseButtonClicked(peres) {
		this.setState({
			peres
		})
	}

	render() {
		return (
			<div className={styles.addUgyFormContainer}>
				<form>
					<div id={styles.topBar}>
						<button type="button" onClick={() => this.handleChooseButtonClicked(true)}>Peres</button>

						<button type="button" onClick={() => this.handleChooseButtonClicked(false)}>Nem peres</button>
						<button type="button" id={styles.closeButton}>
							<AiOutlineClose id={styles.closeIcon} size="2rem" />
						</button>
					</div>
					{this.state.peres ? <PeresUgyForm /> : <h1>nem peres</h1>}
				</form>
			</div>
		);
	}
}

export default AddUgyForm;
