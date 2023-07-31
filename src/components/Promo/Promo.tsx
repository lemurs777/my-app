import { Link } from 'react-router-dom';

import styles from './Promo.module.scss';

import PromoBanner1 from '../../assets/images/profile-promo-banner-1-x2.min.jpg';
import PromoBanner2 from '../../assets/images/profile-promo-banner-2-x2.min.jpg';
import PromoBanner3 from '../../assets/images/profile-promo-banner-3-x2.min.jpg';

function Promo() {

	const arrPromo = [
		{
			src: PromoBanner1,
			title: 'Фрибет 1 000 рублей новым клиентам БК “Пари”',
			link: '/profile/',
			btnText: 'Получить фрибет',
		},
		{
			src: PromoBanner2,
			title: 'Бонус за депозит 5 000 рублей в  БК “Пари”',
			link: '/profile/',
			btnText: 'Получить промокод',
		},
		{
			src: PromoBanner3,
			alt: 'Banner',
			title: 'Страховка экспресса в  БК “Пари”',
			link: '/profile/',
			btnText: 'Получить страховку',
		},

	];

	return (
		<div className={styles.promo}>
			<div className={styles.header}>
				<Link className={styles.headerBtn} to="/profile/">Profile</Link>
				<h1 className={styles.headerTitle}>Мои промокоды</h1>
			</div>
			<div className={styles.contentEmpty}>
				<h2 className={styles.title}>У вас пока нет бонусов</h2>
                <p className={styles.info}>Введите промокод,чтобы добавить бонусы</p>
			</div>
			<div className={styles.content}>
				<ul className={styles.list}>
					{arrPromo.map((item, index) => (
						<li key={index} className={styles.item}>
							<img className={styles.itemImg} src={item.src} alt={item.title} />
							<div className={styles.itemInfo}>
								<h2 className={styles.itemTitle}>{item.title}</h2>
								<Link className={styles.itemLink} to={item.link}>Подробнее</Link>
								<div className={styles.itemBtnWrapper}>
									<button className={styles.itemBtn}>{item.btnText}</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Promo;