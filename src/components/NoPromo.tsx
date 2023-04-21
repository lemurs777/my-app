import { Link } from 'react-router-dom';

function NoPromo() {
	return (
		<div className="promo">
			<div className="promo__header">
				<Link className="promo__header-btn" to="/profile/">Profile</Link>
				<h1 className="promo__header-title">Мои промокоды</h1>
			</div>
			<div className="promo__content">
				<h2 className="promo__title">У вас пока нет бонусов</h2>
                <p className="promo__info">Введите промокод,чтобы добавить бонусы</p>
			</div>
		</div>
	);
}

export default NoPromo;