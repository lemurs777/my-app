import { ModalType } from './types';

import clsx from 'clsx';

import Notifications from '../../assets/images/notifications-x2.min.png';

import styles from './ModalNotifications.module.scss';

function ModalNotifications (props: ModalType) {

	return (
		<div className={styles.modalNotifications}>
			<h2 className={styles.title}>Уведомления</h2>
			<img className={styles.img} src={Notifications} alt="Уведомления" />
			<div className={styles.about}>Будь всегда в курсе событий - подпишись на наши уведомления и первым узнавай о самых свежих новостях и интересных акциях!</div>
			<ul className={styles.list}>
				<li className={styles.item}>Много крутых акций</li>
				<li className={styles.item}>Только важные новости</li>
				<li className={styles.item}>Персональные бонусы</li>
			</ul>
			<div className={styles.text}>Не пропускай то, что действительно важно!</div>
			<button className={styles.btn}>Продолжить</button>
			<button className={clsx(styles.btn, styles.btnClose)} onClick={props.toggleModal}>Позже</button>
		</div>
	);
}

export default ModalNotifications;
