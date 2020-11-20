import React, { useState } from 'react';
import FormSection from './FormSection';
import MeetingInput from './MeetingInput';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './AddMeetings.module.css';

const AddMeetings = () => {
	const [state, setState] = useState({ numOfMeetings: 3 });

	const handleAddButtonClick = () => {
		setState((prev) => {
			return { numOfMeetings: prev.numOfMeetings + 1 };
		});
	};

	const handleDeleteClick = (key) => {
		console.log(key);
	}

	return (
		<FormSection label="Tárgyalások">
			{Array.from({ length: state.numOfMeetings }).map((_, i) => {
				return <MeetingInput key={i} handleDeleteClick={handleDeleteClick}/>;
			})}
			<button
				className={styles.AddMeetingBtn}
				type="button"
				onClick={handleAddButtonClick}
			>
				<AiOutlinePlus size="2.5rem" className={styles.plusIcon} />
			</button>
		</FormSection>
	);
};

export default AddMeetings;
