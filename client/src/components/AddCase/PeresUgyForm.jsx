import React from 'react';
import FormSection from './FormSection';
import Input from './Input';
import styles from './PeresUgyForm.module.css';

const PeresUgyForm = () => {

		/* 
	Ügyfél neve 
	Ügyfél telefonszáma
	Ügyfél email címe
	Ügy tárgya
	Bíróság neve
	Bírósági ügyszám
	Irodai Ügyszám
	Alperes neve
	Felperes neve
	Kezdés dátuma
	Befejezés dátuma
	Tárgyalások időpontja
	*/

	return (
		<div className={styles.PeresUgyFormContainer}>
			<div className={styles.firstRow}>
				<FormSection label="Ügyfél adatai">
					<Input type="text" name="ugyfelNev" required big>
						Ügyfél neve
					</Input>
					<Input type="tel" name="ugyfelTel">
						Ügyfél telefonszáma
					</Input>
					<Input type="email" name="ugyfelEmail">
						Ügyfél email címe
					</Input>
				</FormSection>
				<FormSection label="ügy adatai">
					<Input type="text" name="ugyTargya" required>
						Ügy tárgya
					</Input>
					<Input type="text" name="birosag">
						Melyik bíróságon folyik
					</Input>
					<Input type="text" name="birosagiUgySzam">
						Bírósági ügyszám
					</Input>
					<Input type="text" name="irodaiUgySzam">
						Irodai ügyszám
					</Input>
				</FormSection>
				<FormSection label="Egyéb">
					<Input type="text" name="felperes">
						Felperes
					</Input>
					<Input type="text" name="alperes">
						Alperes
					</Input>
					<Input type="date" name="startDate">
						Kezdés dátuma
					</Input>
					<Input type="date" name="endDate">
						Befejezés dátuma
					</Input>
				</FormSection>
			</div>

			{/* <input type="text" name="alperes" placeholder="Alperes" />
				<input type="text" name="felperes" placeholder="Felperes" /> */}
		</div>
	);
};

export default PeresUgyForm;
