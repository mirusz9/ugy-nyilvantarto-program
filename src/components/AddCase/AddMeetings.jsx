import React from 'react';
import FormSection from './FormSection';
import MeetingInput from './MeetingInput';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './AddMeetings.module.css';

const AddMeetings = () => {
	return (
		<FormSection label="Tárgyalások">
			<MeetingInput />
			<MeetingInput />
			<MeetingInput />
			<button className={styles.AddMeetingBtn} type="button">
				<AiOutlinePlus size="2.5rem" className={styles.plusIcon} />
			</button>
		</FormSection>
	);
};

export default AddMeetings;
