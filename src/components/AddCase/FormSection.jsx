import React from 'react';
import styles from './FormSection.module.css';

const FormSection = (props) => {
	return (
		<fieldset className={styles.fieldset}>
			<legend className={styles.legend}>{props.label}</legend>
			{props.children}
		</fieldset>
	);
};

export default FormSection;
