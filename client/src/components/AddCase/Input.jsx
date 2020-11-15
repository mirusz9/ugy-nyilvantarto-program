import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
	const { type, name, required, children } = props;
	return (
		<input
			className={styles.input}
			type={type}
			name={name}
			placeholder={children}
			required={required}
		/>
	);
};

export default Input;
