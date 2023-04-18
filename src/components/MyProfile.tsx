function MyProfile() {
	return (
		<div className="profile">
			<div className="profile__title-wrapper">
				<h2 className="profile__title">Мой профиль</h2>
				<button className="profile__title-btn">More</button>
			</div>
			<ul className="profile__list">
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Персональные данные</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Персональная информация и верификация аккаунта
					</div>
				</li>
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Транзакции</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Пополнение, вывод и история транзакций
					</div>
				</li>
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Мои ставки</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Ваши активные и рассчитанные ставки
					</div>
				</li>
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Мои промокоды</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Промокоды, которые подходят именно вам
					</div>
				</li>
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Настройки платформы</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Настройка сервиса под себя
					</div>
				</li>
				<li className="profile__item">
					<div className="profile__header">
						<div className="profile__header-icon"></div>
						<h3 className="profile__header-title">Помощь и информация</h3>
						<button className="profile__header-btn-more">More</button>
					</div>
					<div className="profile__item-info">
						Служба поддержки и полезная информация
					</div>
				</li>
			</ul>
		</div>
	);
}

export default MyProfile;
