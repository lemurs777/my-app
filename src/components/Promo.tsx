import { Link } from 'react-router-dom';

import PromoBanner1 from '../assets/images/profile-promo-banner-1-x2.min.jpg';
import PromoBanner2 from '../assets/images/profile-promo-banner-2-x2.min.jpg';
import PromoBanner3 from '../assets/images/profile-promo-banner-3-x2.min.jpg';

function Promo() {
	return (
		<div className="promo">
			<div className="promo__header">
				<Link className="promo__header-btn" to="/profile/">Profile</Link>
				<h1 className="promo__header-title">Мои промокоды</h1>
			</div>
			<div className="promo__content-empty">
				<h2 className="promo__title">У вас пока нет бонусов</h2>
                <p className="promo__info">Введите промокод,чтобы добавить бонусы</p>
			</div>
			<div className="promo__content">
				<ul className="promo__list">
					<li className="promo__item">
						<img className="promo__item-img" src={PromoBanner1} alt="Banner" />
						<div className="promo__item-info">
							<h2 className="promo__item-title">Фрибет 1 000 рублей новым клиентам БК “Пари”</h2>
							<Link className="promo__item-link" to="/profile/">Подробнее</Link>
							<div className="promo__item-btn-wrapper">
								<button className="promo__item-btn">Получить фрибет</button>
							</div>
						</div>
					</li>
					<li className="promo__item">
						<img className="promo__item-img" src={PromoBanner2} alt="Banner" />
						<div className="promo__item-info">
							<h2 className="promo__item-title">Бонус за депозит 5 000 рублей в  БК “Пари”</h2>
							<Link className="promo__item-link" to="/profile/">Подробнее</Link>
							<div className="promo__item-btn-wrapper">
								<button className="promo__item-btn">Получить промокод</button>
							</div>
						</div>	
					</li>
					<li className="promo__item">
						<img className="promo__item-img" src={PromoBanner3} alt="Banner" />
						<div className="promo__item-info">
							<h2 className="promo__item-title">Страховка экспресса в  БК “Пари”</h2>
							<Link className="promo__item-link" to="/profile/">Подробнее</Link>
							<div className="promo__item-btn-wrapper">
								<button className="promo__item-btn">Получить страховку</button>
							</div>
						</div>	
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Promo;