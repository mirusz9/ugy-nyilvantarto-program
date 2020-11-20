import React from 'react';
import Input from './Input';

import { BsFillTrashFill } from 'react-icons/bs';
import styles from './MeetingInput.module.css';

const MeetingInput = ({ id }) => {
	return (
		<div className={styles.meetingContainer}>
			<Input type="text" name={`${id}-meeting-name`}>
				Tárgyalás Neve
			</Input>
			<Input type="datetime-local" name={`${id}-meeting-time`}>
				Tárgyalás Időpontja
			</Input>
			<button type="button" className={styles.trashBtn}>
				<BsFillTrashFill className={styles.trashIcon} size="1.5rem"/>
			</button>
		</div>
	);
};

export default MeetingInput;
