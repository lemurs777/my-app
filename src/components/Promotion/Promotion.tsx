import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Promotion.module.scss';

import PromoMainBanner1 from '../../assets/images/promo-main-banner-1-x2.min.jpg';
import PromoListImg1 from '../../assets/images/promo-list-img-1-x2.min.png';
import PromoListImg2 from '../../assets/images/promo-list-img-2-x2.min.png';
import PromoListImg3 from '../../assets/images/promo-list-img-3-x2.min.png';

function Promotion(){

	return (
		<div className={styles.promotion}>
            <img className={styles.bannner} src={PromoMainBanner1} alt="Banner" />
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <div className={styles.topDates}>02.07.2020 - 03.07.2020</div>
                        <h1 className={styles.topTitle}>Ставь на киберспорт и выиграй спец. призы</h1>
                        <div className={styles.topContent}>
                            <p className={styles.topText}>Правила акции очень просты.</p>
                            <p className={styles.topText}>В период с 05.04.2021 по 27.04.2021 делайте ставки на любую из игр категории <Link className="promotion__info-top-link" to="/promotions/">киберспорт</Link> и станьте победителем розыгрыша 9999₽.</p>
                            <p className={styles.topText}>Чем больше Вы ставите, тем больше ваши шансы выиграть главный приз!</p>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <p className={styles.aboutText}>Как начать выигрывать:</p>
                        <ul className={styles.aboutList}>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutItemImg} src={PromoListImg1} alt="Step 1" width="90" height="90" />
                                <div className={styles.aboutItemText}>Регистрируйся и <span className={styles.aboutItemTextAccent}>получай бонусы</span></div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutItemImg} src={PromoListImg2} alt="Step 2" width="90" height="90" />
                                <div className={styles.aboutItemText}>Ставь на киберспорт и <span className={styles.aboutItemTextAccent}>получай очки</span></div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutItemImg} src={PromoListImg3} alt="Step 3" width="90" height="90" />
                                <div className={styles.aboutItemText}>Выиграй и <br/><span className={styles.aboutItemTextAccent}>получай награды</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.tasks}>
                    <h2 className={styles.tasksTitle}>Вы готовы побеждать?</h2>
                    <div className={styles.tasksName}>Задачи</div>
                    <ul className={styles.tasksList}>
                        <li className={styles.tasksItem}></li>
                        <li className={styles.tasksItem}></li>
                    </ul>
                    <button className={clsx(styles.tasksBtn, styles.tasksBtnDisable)}>Забрать приз</button>
                </div>
            </div>
		</div>
	);
};

export default Promotion;