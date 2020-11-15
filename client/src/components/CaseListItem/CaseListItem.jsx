import React from 'react';
import styles from './CaseListItem.module.css';
import { FaHashtag } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { GoLaw } from 'react-icons/go';




const CaseListItem = ({ peres }) => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item__leftSide}>
				<h4 className={styles.item__CaseName}>
					Közös tulajdon
					{/* Közös tulajdon megszüntetése iránti per */}
				</h4>
				<div className={styles.item__ContactList}>
					<h5 className={styles.smallText}>Kovács István Béla József</h5>
					<h5 className={styles.smallText}>+36 12 3456789</h5>
					<h5 className={styles.smallText}>hosszuemamilcim@gmail.com</h5>
				</div>
			</div>
			<div className={styles.item__rightSideSection}>
				<h4>Kovács István Béla József</h4>
				<h4>Lillie-Mae Keeling</h4>
			</div>

			<div className={styles.item__rightSideSection}>
				<h4 className={styles.smallText}>Budai Központi Kerületi Bíróság</h4>
				<div className={styles.item__Details}>
					<AiFillPhone size="13.3px" className={styles.smallIcon} />
					<h4 className={styles.smallText}>+36 12 3456789</h4>
				</div>
				<div className={styles.item__Details}>
					<GoLaw size="13.3px" className={styles.smallIcon} />
					<h4 className={styles.smallText}>3.P. 23.345/2020.</h4>
				</div>
				<div className={styles.item__Details}>
					<FaHashtag size="13.3px" className={styles.smallIcon} />
					<h4 className={styles.smallText}>3.P. 23.345/2020.</h4>
				</div>
			</div>
			<div className={styles.item__rightSideSection}>
				<div className={styles.item__Details}>
					<BsCalendar className={styles.bigIcon} />
					<h4>3.P. 23.345/2020.</h4>
				</div>
				<div className={styles.item__Details}>
					<BsCalendar className={styles.bigIcon} />
					<h4>06/11/2004</h4>
				</div>
			</div>
		</div>
	);
};

export default CaseListItem;
