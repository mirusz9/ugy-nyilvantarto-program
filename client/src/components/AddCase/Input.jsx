import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = (props) => {
	const { type, name, required, children } = props;

	const [state, setState] = useState({ focused: false });

	const handleInputOnFocus = (focused) => {
		setState({ focused });
	};

	return (
		<fieldset className={styles.fieldset}>
			{state.focused && <legend className={styles.legend}>{children}</legend>}
			<input
				className={styles.input}
				type={type}
				name={name}
				placeholder={!state.focused && children}
				required={required}
				autocomplete="off"
				onFocus={() => handleInputOnFocus(true)}
				onBlur={() => handleInputOnFocus(false)}
			/>
		</fieldset>
	);
};

export default Input;
