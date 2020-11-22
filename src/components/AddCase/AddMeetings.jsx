import React, { useState } from 'react';
import FormSection from './FormSection';
import MeetingInput from './MeetingInput';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './AddMeetings.module.css';

const AddMeetings = ({ handleValueChange, handleDeleteValues }) => {
	// meetings is an array of numbers,
	// meetingId always increments when a new meeting is added
	const [state, setState] = useState({
		meetings: [],
		meetingId: 0,
	});

	// Add the new id, and increment it to ensure that every id is unique
	const handleAddButtonClick = () => {
		setState((prev) => {
			return {
				meetings: [...prev.meetings, prev.meetingId],
				meetingId: prev.meetingId + 1,
			};
		});
	};

	// Find the index of the id to remove, and remove it
	// meetingId doesn't increment
	const handleDeleteClick = (id) => {
		handleDeleteValues([
			`${id}-meeting-name`,
			`${id}-meeting-birosag`,
			`${id}-meeting-time`,
		]);

		setState((prev) => {
			prev.meetings.splice(prev.meetings.indexOf(id), 1);
			return {
				meetings: [...prev.meetings],
				meetingId: prev.meetingId,
			};
		});
	};

	return (
		<FormSection label="Tárgyalások">
			{state.meetings.map((key) => (
				<MeetingInput
					key={key}
					id={key}
					handleDeleteClick={handleDeleteClick}
					handleValueChange={handleValueChange}
				/>
			))}
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
