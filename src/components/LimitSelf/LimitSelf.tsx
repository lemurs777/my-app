import { useState } from 'react';
import clsx from 'clsx';

import styles from './LimitSelf.module.scss';

function LimitSelf() {

	const [isLimitSelf, setIsLimitSelf] = useState(false);

	return (
		
		<div className={styles.limitSelf}>
			<div className={styles.hand}></div>
			<div className={styles.info}>
				<div className={styles.infoText}>
					Режим “Самоисключение из игры” не может быть отменён или прерван до тех пор, пока не истечет срок его действия. Ты не сможешь пользоваться аккаунтом на протяжении всего срока самоисключения.
				</div>
				<label className={clsx(
					styles.infoLabel,
					{ [styles.infoLabelActive] : isLimitSelf},
				)}>
					<input className={styles.infoCheckbox} type="checkbox" checked={isLimitSelf} onChange={() => setIsLimitSelf((check) => !check)} />Включить ограничение сессии
				</label>
				<div className={styles.infoName}>Самоисключение из игры</div>
				<div className={styles.infoSelect}>Выберите срок самоисключения</div>
				<button className={styles.btn}>Сохранить</button>
			</div>
		</div>
				
	);
}

export default LimitSelf;