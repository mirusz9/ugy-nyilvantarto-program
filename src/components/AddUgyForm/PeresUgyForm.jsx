import React, { Component } from "react";
import FormSection from "./FormSection";
import Input from "./Input";
import styles from "./PeresUgyForm.module.css";

class PeresUgyForm extends Component {
	render() {
		return (
			<div className={styles.PeresUgyFormContainer}>
				<FormSection label="Ügyfél adatai">
					<Input
						type="text"
						name="ugyfelNev"
						placeholder="Ügyfél neve"
						required
					/>
					<Input
						type="tel"
						name="ugyfelTel"
						placeholder="Ügyfél telefonszáma"
					/>
					<Input
						type="email"
						name="ugyfelEmail"
						placeholder="Ügyfél email címe"
					/>
				</FormSection>
				{/* <input type="text" name="ugyTargya" placeholder="Ügy tárgya" required />
				<input type="text" name="birosag" placeholder="Melyik bíróságon folyik" />
				<input type="text" name="birosagiUgySzam" placeholder="Bírósági ügyszám" />
				<input type="text" name="irodaiUgySzam" placeholder="Irodai ügyszám" />
				<input type="text" name="alperes" placeholder="Alperes" />
				<input type="text" name="felperes" placeholder="Felperes" /> */}
			</div>
		);
	}
}

export default PeresUgyForm;
