import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PeresUgyForm from './PeresUgyForm';

import styles from './AddCase.module.css';

const AddCase = ({ handleCloseBtnClicked }) => {
	const [state, setState] = useState({
		peres: true,
		// True stores the input values for the peres form, false stores the nemperes values
		values: { true: {}, false: {} },
	});

	const handleChooseButtonClicked = (peres) => {
		setState(({ values }) => {
			return {
				peres,
				values,
			};
		});
	};

	const handleSubmitButtonClicked = (event) => {
		event.preventDefault();
		console.log(state);
	};

	const handleValueChange = (name, value) => {
		setState((prev) => {
			prev.values[prev.peres][name] = value;
			return {
				peres: prev.peres,
				values: prev.values,
			};
		});
	};

	const handleDeleteValues = (names) => {
		setState((prev) => {
			names.forEach((name) => {
				delete prev.values[prev.peres][name];
			});

			return {
				...prev,
			};
		});
	};

	return (
		<div className={styles.addUgyFormContainer}>
			<form>
				<div id={styles.topBar}>
					<div>
						<button
							type="button"
							onClick={() => handleChooseButtonClicked(true)}
						>
							Peres
						</button>

						<button
							type="button"
							onClick={() => handleChooseButtonClicked(false)}
						>
							Nem peres
						</button>
					</div>
					<div>
						<button
							type="submit"
							id={styles.submitButton}
							onClick={handleSubmitButtonClicked}
						>
							Submit
						</button>
						<button
							type="button"
							id={styles.closeButton}
							onClick={handleCloseBtnClicked}
						>
							<AiOutlineClose id={styles.closeIcon} size="2rem" />
						</button>
					</div>
				</div>
				{state.peres ? (
					<PeresUgyForm
						handleValueChange={handleValueChange}
						handleDeleteValues={handleDeleteValues}
					/>
				) : (
					<h1>nem peres</h1>
				)}
			</form>
		</div>
	);
};

export default AddCase;
