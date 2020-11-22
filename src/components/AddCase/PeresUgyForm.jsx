import React from 'react';
import FormSection from './FormSection';
import Input from './Input';
import AddMeetings from './AddMeetings';
import styles from './PeresUgyForm.module.css';

const PeresUgyForm = ({ handleValueChange, handleDeleteValues }) => {
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
					<Input
						type="text"
						name="ugyfelNev"
						handleValueChange={handleValueChange}
						required
					>
						Ügyfél neve
					</Input>
					<Input
						type="tel"
						name="ugyfelTel"
						handleValueChange={handleValueChange}
					>
						Ügyfél telefonszáma
					</Input>
					<Input
						type="email"
						name="ugyfelEmail"
						handleValueChange={handleValueChange}
					>
						Ügyfél email címe
					</Input>
				</FormSection>
				<FormSection label="ügy adatai">
					<Input
						type="text"
						name="ugyTargya"
						handleValueChange={handleValueChange}
						required
					>
						Ügy tárgya
					</Input>
					<Input
						type="text"
						name="birosag"
						handleValueChange={handleValueChange}
					>
						Melyik bíróságon folyik
					</Input>
					<Input
						type="text"
						name="birosagiUgySzam"
						handleValueChange={handleValueChange}
					>
						Bírósági ügyszám
					</Input>
					<Input
						type="text"
						name="irodaiUgySzam"
						handleValueChange={handleValueChange}
					>
						Irodai ügyszám
					</Input>
				</FormSection>
				<FormSection label="Egyéb">
					<Input
						type="text"
						name="felperes"
						handleValueChange={handleValueChange}
					>
						Felperes
					</Input>
					<Input
						type="text"
						name="alperes"
						handleValueChange={handleValueChange}
					>
						Alperes
					</Input>
					<Input
						type="date"
						name="startDate"
						handleValueChange={handleValueChange}
					>
						Kezdés dátuma
					</Input>
					<Input
						type="date"
						name="endDate"
						handleValueChange={handleValueChange}
					>
						Befejezés dátuma
					</Input>
				</FormSection>
			</div>
			<AddMeetings
				handleValueChange={handleValueChange}
				handleDeleteValues={handleDeleteValues}
			/>
		</div>
	);
};

export default PeresUgyForm;
