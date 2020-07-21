import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PeresUgyForm from "./PeresUgyForm";

import "./AddUgyForm.css";

class AddUgyForm extends Component {
	render() {
		return (
			<div className="addUgyFormContainer">
				<form>
					<div id="topBar">
						<input className="hidden" type="radio" id="peres" name="peres" checked />
						<label for="peres">Peres</label>
						<input className="hidden" type="radio" id="nemPeres" name="peres" />
						<label for="nemPeres">Nem peres</label>
						<button type="button" id="closeButton">
							<AiOutlineClose id="closeIcon" size="2rem" />
						</button>
					</div>
					<PeresUgyForm />
				</form>
			</div>
		);
	}
}

export default AddUgyForm;
