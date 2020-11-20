import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import styles from './App.module.css';

const App = () => {
	const [state, setState] = useState({ page: 'CaseList' });

	const handleAddBtnClick = () => {
		setState({ page: 'AddCase' });
	};

	const handleCloseBtnClicked = () => {
		setState({ page: 'CaseList' });
	}

	return (
		<div className={styles.container}>
			<Header handleAddBtnClick={handleAddBtnClick} />
			<Body page={state.page} handleCloseBtnClicked={handleCloseBtnClicked}/>
		</div>
	);
};

export default App;
