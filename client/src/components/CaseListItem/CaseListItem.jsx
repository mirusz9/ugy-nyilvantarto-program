import React from 'react';
import styles from './CaseListItem.module.css';
import { FaHashtag } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';

const CaseListItem = (props) => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item__leftSide}>
				<h4 className={styles.item__CaseName}>Nagy Károly autót lopott</h4>
				<div className={styles.item__ContactList}>
					<h5 className={styles.item__Contact}>Kovács István</h5>
					<h5 className={styles.item__Contact}>+36 12 3456789</h5>
					<h5 className={styles.item__Contact}>kovacs.pista@nubmail.com</h5>
				</div>
			</div>
			<div className={styles.item__rightSide}>
				<div className={styles.item__Details}>
					<FaHashtag className={styles.icon} />
					<h4>3.P. 23.345/2020.</h4>
				</div>
				<div className={styles.item__Details}>
					<BsCalendar className={styles.icon} />
					<h4>06/11/2004</h4>
				</div>
			</div>
		</div>
	);
};

export default CaseListItem;
