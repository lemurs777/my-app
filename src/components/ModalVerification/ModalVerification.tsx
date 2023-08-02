import { ModalType } from './types';

import Verification from '../../assets/images/verification-x2.min.png';

import styles from './ModalVerification.module.scss';

function ModalVerification (props: ModalType) {

	return (
		<div className={styles.modalVerification}>
			<h2 className={styles.title}>Проверка личности</h2>
			<img className={styles.img} src={Verification} alt="Проверка личности" />
			<div className={styles.text}>Для повышения уровня безопасности Вашего аккаунта необходимо пройти процедуру проверки личности</div>
			<button className={styles.btn}>Продолжить</button>
		</div>
	);
}

export default ModalVerification;
