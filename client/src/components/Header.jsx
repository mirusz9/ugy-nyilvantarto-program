import React from 'react';
import styles from './Header.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

const Header = ({handleAddBtnClick}) => {
	return (
		<div className={styles.HeaderContainer}>
			<h1 id={styles.appName}>Vidéki law</h1>
			<button id={styles.addButton} onClick={handleAddBtnClick}>
				<AiOutlinePlus size="2.5rem" id={styles.plusIcon} />
				Add
			</button>
		</div>
	);
};

export default Header;
