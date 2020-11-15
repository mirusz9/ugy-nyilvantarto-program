import React from 'react';
import CaseList from './CaseList';
import AddCase from './AddCase/AddCase';
import styles from './Body.module.css';

const Body = ({ page, handleCloseBtnClicked }) => {
	let elementToRender;

	switch (page) {
		case 'CaseList':
			elementToRender = <CaseList />;
			break;
		case 'AddCase':
			elementToRender = <AddCase handleCloseBtnClicked={handleCloseBtnClicked} />;
			break;
		default:
			elementToRender = "Something's wrong.";
	}

	return <div className={styles.body}>{elementToRender}</div>;
};

export default Body;
