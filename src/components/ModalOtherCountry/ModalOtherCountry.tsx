import { ModalType } from './types';

import Attention from '../../assets/images/svg/modals/attention.svg';

import styles from './ModalOtherCountry.module.scss';

function ModalOtherCountry (props: ModalType) {

	return (
		<div className={styles.modalOtherCountry}>
			<h2 className={styles.title}>Внимание</h2>
			<img className={styles.img} src={Attention} alt="Внимание" />
			<div className={styles.text}>Вы осуществили вход в аккаунт из нового региона. В целях безопасности, мы временно <span className={styles.textAccent}>ограничили вывод,</span> он станет доступен только после дополнительной верификации</div>
			<button className={styles.btn}>Продолжить</button>
		</div>
	);
}

export default ModalOtherCountry;
