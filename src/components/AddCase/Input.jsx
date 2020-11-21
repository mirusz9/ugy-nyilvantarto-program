import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = (props) => {
	const { type, name, required, children } = props;

	const [state, setState] = useState({
		focused: false,
		value: '',
	});

	const handleInputOnFocus = (focused) => {
		setState((prevState) => {
			return { focused, value: prevState.value };
		});
	};

	const withLegend = () => {
		return (
			type === 'date' ||
			type === 'datetime-local' ||
			state.focused ||
			state.value
		);
	};

	const handleOnChange = ({ target: { value } }) => {
		setState((prevState) => {
			return { focused: prevState.focused, value };
		});
	};

	return (
		<fieldset className={styles.fieldset}>
			{withLegend() && (
				<legend
					className={`${styles.legend} ${
						state.focused ? styles.highlightLegend : styles.focusedLegendColor
					}`}
				>
					{children}
				</legend>
			)}
			<input
				className={`${styles.input} ${withLegend() ? styles.withLegend : ''}`}
				type={type}
				name={name}
				placeholder={!withLegend() ? children : ''}
				required={required}
				autoComplete="off"
				onFocus={() => handleInputOnFocus(true)}
				onBlur={() => handleInputOnFocus(false)}
				onChange={handleOnChange}
				
			/>
		</fieldset>
	);
};

export default Input;
