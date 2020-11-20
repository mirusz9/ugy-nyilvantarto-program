import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PeresUgyForm from './PeresUgyForm';

import styles from './AddCase.module.css';

const AddCase = ({handleCloseBtnClicked}) => {
	const [state, setState] = useState({ peres: true });

	const handleChooseButtonClicked = (peres) => {
		setState({
			peres,
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
					<button type="button" id={styles.closeButton} onClick={handleCloseBtnClicked}>
						<AiOutlineClose id={styles.closeIcon} size="2rem" />
					</button>
				</div>
				{state.peres ? <PeresUgyForm /> : <h1>nem peres</h1>}
			</form>
		</div>
	);
};

export default AddCase;
