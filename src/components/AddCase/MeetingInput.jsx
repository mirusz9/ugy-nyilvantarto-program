import React from 'react';
import Input from './Input';

import { BsFillTrashFill } from 'react-icons/bs';
import styles from './MeetingInput.module.css';

const MeetingInput = ({ id, handleDeleteClick, handleValueChange }) => {
	return (
		<div className={styles.meetingContainer}>
			<Input
				type="text"
				name={`${id}-meeting-name`}
				handleValueChange={handleValueChange}
			>
				Tárgyalás Neve
			</Input>
			<Input
				type="text"
				name={`${id}-meeting-birosag`}
				handleValueChange={handleValueChange}
			>
				Bíróság
			</Input>
			<Input
				type="datetime-local"
				name={`${id}-meeting-time`}
				handleValueChange={handleValueChange}
			>
				Tárgyalás Időpontja
			</Input>
			<button
				type="button"
				className={styles.trashBtn}
				onClick={() => handleDeleteClick(id)}
			>
				<BsFillTrashFill className={styles.trashIcon} size="1.5rem" />
			</button>
		</div>
	);
};

export default MeetingInput;
