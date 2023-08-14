import clsx from 'clsx';
import { ModalType } from './types';

import styles from './ModalTicketInfo.module.scss';

function ModalTicketInfo (props: ModalType) {

	return (
		<div className={styles.modalTicketInfo}>
			<h2 className={styles.title}>Информация о билете</h2>
			<div className={styles.infoWrapper}>
				<div className={styles.info}>
					<div className={styles.infoName}>Номер ставки:</div>
					<button className={styles.infoBtn} onClick={() => window.navigator.clipboard.writeText('67453829035489')}>67453829035489</button>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Статус:</div>
					<div className={styles.infoText}>Разыгран</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Принята:</div>
					<div className={styles.infoText}>20.02.2023 22:23</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Тип ставки:</div>
					<div className={styles.infoText}>Экспресс</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Коэффициент:</div>
					<div className={styles.infoText}>1.13</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Бонусные очки:</div>
					<div className={clsx(styles.infoText, styles.infoTextAccent)}>4.20L</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Сумма ставки:</div>
					<div className={styles.infoText}>1600₽</div>
				</div>
				<div className={styles.info}>
					<div className={styles.infoName}>Выигрыш:</div>
					<div className={clsx(styles.infoText, styles.infoTextAccent)}>1890.32 ₽</div>
				</div>
			</div>
			<div className={styles.aboutTitle}>Ставка-экспресс</div>
			<div className={styles.about}>
				<div className={styles.aboutTop}>
					<div className={styles.aboutTopText}>Футбол - Азия - Лига Чемпионов АФК</div>
					<div className={styles.aboutTopInfo}>Выиграна</div>
				</div>
				<div className={styles.aboutMain}>
					<div className={styles.aboutMainTeams}>
						<div className={styles.aboutMainTeam}>Аль-Хиляль</div>
						<div className={styles.aboutMainTeam}>Аль-Ахли дубай</div>
					</div>
					<div className={styles.aboutMainInfo}>1.01</div>
				</div>
				<div className={styles.aboutInfo}>20.02.2023 21:00</div>
				<div className={styles.aboutBottom}>
					<div className={styles.aboutBottomWin}>Победитель - <span className={styles.aboutBottomWinAccent}>1</span></div>
					<div className={styles.aboutBottomInfo}><span className={styles.aboutBottomInfoAccent}>3</span> : <span className={styles.aboutBottomInfoAccent}>1</span></div>
				</div>
			</div>
		</div>
	);
}

export default ModalTicketInfo;
